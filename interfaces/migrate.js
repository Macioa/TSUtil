const MODELS = require('../models')
const FS = require('fs')
const PATH = require('path')

const typeMap = {
  ['VARCHAR(255)']: 'string',
  ['INTEGER']: 'number',
  ['DOUBLE PRECISION']: 'number',
  ['TIMESTAMP WITH TIME ZONE']: 'Date'
}

// write interfaces to index.ts
FS.writeFile(
  PATH.join(__dirname, `index.ts`),
  Object.keys(MODELS)
    .map((k, i, t, map = {}) => {
      let props = Object.keys(MODELS[k].rawAttributes)
        .map((a, i, t, prop = {}) => {
          prop.key = MODELS[k].rawAttributes[a].allowNull == false ? a : `${a}?` //format key for ts
          prop.type = MODELS[k].rawAttributes[a].type.toString() //get data type from model
          return prop
        })
        .filter(p => p.key != 'createdAt' && p.key != 'updatedAt') // remove sql properties
        .map(p => Object.assign(p, { type: typeMap[p.type] })) // translate data type to ts

      return `export interface ${k} {\n${props //return interface declaration
        .map(p => `${p.key}:${p.type}`)
        .join(',\n')}\n}`
    })
    .join('\n\n'),
  { encoding: 'utf8', flag: 'w' },
  err => console.log(err || '')
)
