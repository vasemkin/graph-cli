let fs = require('fs-extra')
let graphql = require('graphql/language')
let immutable = require('immutable')

let AquaSchemaCodeGenerator = require('./codegen/aqua-schema')

module.exports = class AquaSchema {
  constructor(filename, document, ast) {
    this.filename = filename
    this.document = document
    this.ast = ast
  }

  codeGenerator() {
    return new AquaSchemaCodeGenerator(this)
  }

  static async load(filename) {
    let document = await fs.readFile(filename, 'utf-8')
    let ast = graphql.parse(document)
    return new AquaSchema(filename, document, immutable.fromJS(ast))
  }
}
