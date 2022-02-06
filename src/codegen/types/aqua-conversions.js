const immutable = require('immutable')

/**
 * ethereum.Value -> Aqua conversions
 */
const ETHEREUM_VALUE_TO_AQUA = [
  // Scalar values

  ['address', 'string', code => `${code}.toAddress()`],
  ['bool', 'bool', code => `${code}.toBoolean()`],
  ['byte', 'u8', code => `${code}.toBytes()`],
  [
    /^bytes(1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32)?$/,
    'string',
    code => `${code}.toBytes()`,
  ],
  [/^int(8|16|24|32)$/, 'i32', code => `${code}.toI32()`],
  [/^uint(8|16|24)$/, 'i32', code => `${code}.toI32()`],
  ['uint32', 'u32', code => `${code}.toBigInt()`],
  [
    /^u?int(40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)$/,
    'u64',
    code => `${code}.toBigInt()`,
  ],
  ['string', 'string', code => `${code}.toString()`],

  // Arrays

  [/^address\[([0-9]+)?\]$/, '[]string', code => `${code}.toAddressArray()`],
  [/^bool\[([0-9]+)?\]$/, '[]bool', code => `${code}.toBooleanArray()`],
  [/^byte\[([0-9]+)?\]$/, '[]string', code => `${code}.toBytesArray()`],
  [
    /^bytes(1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32)?\[([0-9]+)?\]$/,
    '[]string',
    code => `${code}.toBytesArray()`,
  ],
  [/^int(8|16|24|32)\[([0-9]+)?\]$/, '[]i32', code => `${code}.toI32Array()`],
  [/^uint(8|16|24)\[([0-9]+)?\]$/, '[]i32', code => `${code}.toI32Array()`],
  [/^uint32\[([0-9]+)?\]$/, '[]u32', code => `${code}.toBigIntArray()`],
  [
    /^u?int(40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)\[([0-9]+)?\]$/,
    '[]u64',
    code => `${code}.toBigIntArray()`,
  ],
  [/^string\[([0-9]+)?\]$/, '[]string', code => `${code}.toStringArray()`],

  // Tuples

  ['tuple', '[]i32', code => `${code}.toTupleArray()`],
  [
    /^tuple\[([0-9]+)?\]$/,
    '[][]i32',
    (code, type) => `${code}.toTupleArray<${type}>()`,
  ],
]

/**
 * Aqua -> ethereum.Value conversions
 *
 * Note: The order and patterns for conversions in this direction differ slightly
 * from ethereum.Value -> Aqua, which is why there is a separate table
 * for them.
 */
const AQUA_TO_ETHEREUM_VALUE = [
  // Scalar values

  ['string', 'address', code => `ethereum.Value.fromAddress(${code})`],
  ['bool', 'bool', code => `ethereum.Value.fromBoolean(${code})`],
  ['string', 'byte', code => `ethereum.Value.fromFixedBytes(${code})`],
  ['string', 'bytes', code => `ethereum.Value.fromBytes(${code})`],
  [
    'string',
    /^bytes(1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32)$/,
    code => `ethereum.Value.fromFixedBytes(${code})`,
  ],
  ['i32', /^int(8|16|24|32)$/, code => `ethereum.Value.fromI32(${code})`],
  [
    'i32',
    /^uint(8|16|24)$/,
    code => `ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(${code}))`,
  ],
  [
    'u64',
    /^int(40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)$/,
    code => `ethereum.Value.fromSignedBigInt(${code})`,
  ],
  [
    'u32',
    /^uint(32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)$/,
    code => `ethereum.Value.fromUnsignedBigInt(${code})`,
  ],
  ['string', 'string', code => `ethereum.Value.fromString(${code})`],

  // Arrays

  [
    '[]string',
    /^address\[([0-9]+)?\]$/,
    code => `ethereum.Value.fromAddressArray(${code})`,
  ],
  [
    '[]bool',
    /^bool\[([0-9]+)?\]$/,
    code => `ethereum.Value.fromBooleanArray(${code})`,
  ],
  [
    '[]string',
    /^byte\[([0-9]+)?\]$/,
    code => `ethereum.Value.fromFixedBytesArray(${code})`,
  ],
  [
    '[]string',
    /bytes\[([0-9]+)?\]$/,
    code => `ethereum.Value.fromBytesArray(${code})`,
  ],
  [
    '[]string',
    /^bytes(1|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31|32)\[([0-9]+)?\]$/,
    code => `ethereum.Value.fromFixedBytesArray(${code})`,
  ],
  [
    '[]i32',
    /^int(8|16|24|32)\[([0-9]+)?\]$/,
    code => `ethereum.Value.fromI32Array(${code})`,
  ],
  [
    '[]i32',
    /^uint(8|16|24)\[([0-9]+)?\]$/,
    code => `ethereum.Value.fromI32Array(${code})`,
  ],
  [
    '[]u32',
    /^int(40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)\[([0-9]+)?\]$/,
    code => `ethereum.Value.fromSignedBigIntArray(${code})`,
  ],
  [
    '[]u32',
    /^uint(32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)\[([0-9]+)?\]$/,
    code => `ethereum.Value.fromUnsignedBigIntArray(${code})`,
  ],
  [
    '[]string',
    /^string\[([0-9]+)?\]$/,
    code => `ethereum.Value.fromStringArray(${code})`,
  ],
  ['[]i32', 'tuple', code => `ethereum.Value.fromTuple(${code})`],
  [
    '[][]i32',
    /^tuple\[([0-9]+)?\]$/,
    code => `ethereum.Value.fromTupleArray(${code})`,
  ],
]

/**
 * Value -> Aqua conversions
 */
const VALUE_TO_AQUA = [
  // Arrays

  ['[Bytes]', '[]string', code => `${code}.toBytesArray()`],
  ['[Boolean]', '[]bool', code => `${code}.toBooleanArray()`],
  ['[Int]', '[]i32', code => `${code}.toI32Array()`],
  ['[BigInt]', '[]u32', code => `${code}.toBigIntArray()`],
  ['[ID]', '[]string', code => `${code}.toStringArray()`],
  ['[String]', '[]string', code => `${code}.toStringArray()`],
  ['[BigDecimal]', '[]u32', code => `${code}.toBigDecimalArray()`],
  [/\[.*\]/, '[]string', code => `${code}.toStringArray()`],

  // Scalar values

  ['Bytes', 'string', code => `${code}.toBytes()`],
  ['Boolean', 'bool', code => `${code}.toBoolean()`],
  ['Int', 'i32', code => `${code}.toI32()`],
  ['BigInt', 'u32', code => `${code}.toBigInt()`],
  ['ID', 'string', code => `${code}.toString()`],
  ['String', 'string', code => `${code}.toString()`],
  ['BigDecimal', 'u32', code => `${code}.toBigDecimal()`],
  [/.*/, 'string', code => `${code}.toString()`],
]

/**
 * Aqua -> Value conversions
 *
 * Note: The order and patterns for conversions in this direction differ slightly
 * from Value -> Aqua, which is why there is a separate table
 * for them.
 */
const AQUA_TO_VALUE = [
  // Arrays

  ['[]string', '[Bytes]', code => `Value.fromBytesArray(${code})`, 'new Array(0)'],
  ['[]string', '[Bytes]', code => `Value.fromBytesArray(${code})`, 'new Array(0)'],
  ['[]bool', '[Boolean]', code => `Value.fromBooleanArray(${code})`, 'new Array(0)'],
  ['[]i32', '[Int]', code => `Value.fromI32Array(${code})`, 'new Array(0)'],
  ['[]u32', '[BigInt]', code => `Value.fromBigIntArray(${code})`, 'new Array(0)'],
  ['[]string', '[String]', code => `Value.fromStringArray(${code})`, 'new Array(0)'],
  ['[]string', '[ID]', code => `Value.fromStringArray(${code})`, 'new Array(0)'],
  ['[]u32', '[BigDecimal]', code => `Value.fromBigDecimalArray(${code})`, 'new Array(0)'],
  ['[]string', /\[.*\]/, code => `Value.fromStringArray(${code})`, 'new Array(0)'],
  ['?[]string', null, code => `Value.fromStringArray(${code})`, 'new Array(0)'],

  // Scalar values

  ['string', 'Bytes', code => `Value.fromBytes(${code})`, 'Address.zero()'],
  ['string', 'Bytes', code => `Value.fromBytes(${code})`, 'Bytes.empty()'],
  ['bool', 'Boolean', code => `Value.fromBoolean(${code})`, 'false'],
  ['i32', 'Int', code => `Value.fromI32(${code})`, '0'],
  ['u32', 'BigInt', code => `Value.fromBigInt(${code})`, 'BigInt.zero()'],
  ['string', 'String', code => `Value.fromString(${code})`, "''"],
  ['string', 'ID', code => `Value.fromString(${code})`, "''"],
  ['u32', 'BigDecimal', code => `Value.fromBigDecimal(${code})`, 'BigDecimal.zero()'],
  ['string', /.*/, code => `Value.fromString(${code})`, "''"],
]

/**
 * Type conversions
 */
module.exports = immutable.fromJS({
  ethereum: {
    Aqua: ETHEREUM_VALUE_TO_AQUA,
  },
  Aqua: {
    ethereum: AQUA_TO_ETHEREUM_VALUE,
    Value: AQUA_TO_VALUE,
  },
  Value: {
    Aqua: VALUE_TO_AQUA,
  },
})
