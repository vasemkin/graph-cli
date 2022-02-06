const immutable = require('immutable')
const aquaCodegen = require('./aqua')
const typesCodegen = require('./types/aqua-init')

const List = immutable.List

module.exports = class AquaSchemaCodeGenerator {
  constructor(schema) {
    this.schema = schema
  }

  generateModuleImports() {
    return [
      aquaCodegen.moduleImports(
        [
          // Base classes
          'TypedMap',
          'Entity',
          'Value',
          'ValueKind',

          // Basic Scalar types
          'Bytes',
          'BigInt',
          'BigDecimal',
        ],
        '@graphprotocol/graph-ts',
      ),
    ]
  }

  generateTypes() {
    return this.schema.ast
      .get('definitions')
      .filter(def => this._isEntityTypeDefinition(def))
      .map(def => this._generateEntityType(def))
  }

  _isEntityTypeDefinition(def) {
    return (
      def.get('kind') === 'ObjectTypeDefinition' &&
      def
        .get('directives')
        .find(directive => directive.getIn(['name', 'value']) === 'entity') !== undefined
    )
  }

  _generateEntityType(def) {
    let name = def.getIn(['name', 'value'])

    let product = aquaCodegen.product(name)

    // Generate entities
    def
      .get('fields')
      .reduce(
        (methods, field) => methods.concat(this._generateEntityFieldMethods(def, field)),
        List(),
      )
      .forEach(method => product.addField(method))

    return product
  }

  _generateEntityFieldMethods(entityDef, fieldDef) {
    return List([
      this._generateEntityField(entityDef, fieldDef),
    ])
  }

  _generateEntityField(entityDef, fieldDef) {
    let name = fieldDef.getIn(['name', 'value'])
    let gqlType = fieldDef.get('type')
    let returnType = this._typeFromGraphQl(gqlType)

    return aquaCodegen.field(name, returnType)
  }

  _valueTypeFromGraphQl(gqlType) {
    return gqlType.get('kind') === 'NonNullType'
      ? this._valueTypeFromGraphQl(gqlType.get('type'), false)
      : gqlType.get('kind') === 'ListType'
      ? '[' + this._valueTypeFromGraphQl(gqlType.get('type')) + ']'
      : gqlType.getIn(['name', 'value'])
  }

  _typeFromGraphQl(gqlType, nullable = true, nullablePrimitive = false) {
    if (gqlType.get('kind') === 'NonNullType') {
      return this._typeFromGraphQl(gqlType.get('type'), false)
    } else if (gqlType.get('kind') === 'ListType') {
      let type = aquaCodegen.arrayType(this._typeFromGraphQl(gqlType.get('type')))
      return nullable ? aquaCodegen.nullableType(type) : type
    } else {
      // NamedType
      let type = aquaCodegen.namedType(
        typesCodegen.ascTypeForValue(gqlType.getIn(['name', 'value'])),
      )

      // Will not wrap primitives into NullableType by default.
      if (!nullablePrimitive && type.isPrimitive()) {
        return type
      }

      return nullable ? aquaCodegen.nullableType(type) : type
    }
  }
}
