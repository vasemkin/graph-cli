const immutable = require('immutable')

const TYPE_CONVERSIONS = require('./aqua-conversions')

// Conversion utilities

const conversionsForTypeSystems = (fromTypeSystem, toTypeSystem) => {
  let conversions = TYPE_CONVERSIONS.getIn([fromTypeSystem, toTypeSystem])
  if (conversions === undefined) {
    throw new Error(
      `Conversions from '${fromTypeSystem}' to '${toTypeSystem}' are not supported`,
    )
  }
  return conversions
}

const objectifyConversion = (fromTypeSystem, toTypeSystem, conversion) => {
  return immutable.fromJS({
    from: {
      typeSystem: fromTypeSystem,
      type: conversion.get(0),
    },
    to: {
      typeSystem: toTypeSystem,
      type: conversion.get(1),
    },
    convert: conversion.get(2),
  })
}

const findConversionFromType = (fromTypeSystem, toTypeSystem, fromType) => {
  let conversions = conversionsForTypeSystems(fromTypeSystem, toTypeSystem)

  let conversion = conversions.find(conversion =>
    typeof conversion.get(0) === 'string'
      ? conversion.get(0) === fromType
      : fromType.match(conversion.get(0)),
  )

  if (conversion === undefined) {
    throw new Error(
      `Conversion from '${fromTypeSystem}' to '${toTypeSystem}' for ` +
        `source type '${fromType}' is not supported`,
    )
  }

  return objectifyConversion(fromTypeSystem, toTypeSystem, conversion)
}

const findConversionToType = (fromTypeSystem, toTypeSystem, toType) => {
  let conversions = conversionsForTypeSystems(fromTypeSystem, toTypeSystem)

  let conversion = conversions.find(conversion =>
    typeof conversion.get(1) === 'string'
      ? conversion.get(1) === toType
      : toType.match(conversion.get(1)),
  )

  if (conversion === undefined) {
    throw new Error(
      `Conversion from '${fromTypeSystem}' to '${toTypeSystem}' for ` +
        `target type '${toType}' is not supported`,
    )
  }

  return objectifyConversion(fromTypeSystem, toTypeSystem, conversion)
}

const findInitializationForType = (fromTypeSystem, toTypeSystem, ascType) => {
  const conversions = conversionsForTypeSystems(fromTypeSystem, toTypeSystem)

  const conversion = conversions.find(conversion =>
    typeof conversion.get(0) === 'string'
      ? conversion.get(0) === ascType
      : ascType.match(conversion.get(0)),
  )

  if (conversion === undefined) {
    throw new Error(
      `Conversion from '${fromTypeSystem}' to '${toTypeSystem}' for ` +
        `target type '${ascType}' is not supported`,
    )
  }

  const conversionObj = objectifyConversion(fromTypeSystem, toTypeSystem, conversion)

  return conversionObj.get('convert')(conversion.get(3))
}

// High-level type system API

const ascTypeForProtocol = (protocol, protocolType) =>
  findConversionFromType(protocol, 'Aqua', protocolType).getIn(['to', 'type'])

// TODO: this can be removed/replaced by the function above
const ascTypeForEthereum = ethereumType =>
  ascTypeForProtocol('ethereum', ethereumType)

const ethereumTypeForAsc = ascType =>
  findConversionFromType('Aqua', 'ethereum', ascType).getIn(['to', 'type'])

const ethereumToAsc = (code, ethereumType, internalType) =>
  findConversionFromType('ethereum', 'Aqua', ethereumType).get('convert')(
    code,
    internalType,
  )

const ethereumFromAsc = (code, ethereumType) =>
  findConversionToType('Aqua', 'ethereum', ethereumType).get('convert')(code)

const ascTypeForValue = valueType =>
  findConversionFromType('Value', 'Aqua', valueType).getIn(['to', 'type'])

const valueTypeForAsc = ascType =>
  findConversionFromType('Aqua', 'Value', ascType).getIn(['to', 'type'])

const valueToAsc = (code, valueType) =>
  findConversionFromType('Value', 'Aqua', valueType).get('convert')(code)

const valueFromAsc = (code, valueType) =>
  findConversionToType('Aqua', 'Value', valueType).get('convert')(code)

const initializedValueFromAsc = ascType =>
  findInitializationForType('Aqua', 'Value', ascType)

module.exports = {
  // protocol <-> Aqua
  ascTypeForProtocol,

  // ethereum <-> Aqua
  ascTypeForEthereum,
  ethereumTypeForAsc,
  ethereumToAsc,
  ethereumFromAsc,

  // Value <-> Aqua
  ascTypeForValue,
  valueTypeForAsc,
  valueToAsc,
  valueFromAsc,
  initializedValueFromAsc,
}
