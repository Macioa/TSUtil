const FS = require('fs'),
  PATH = require('path'),
  Sequelize = require('sequelize'),
  DB_STRING =
    'postgres://qpmdvdid:JU7q21...@raja.db.elephantsql.com:5432/qpmdvdid' //temporary sample connect string

const DB_INIT = new Sequelize(DB_STRING)

const MODELS = {},
  DB = FS.readdirSync(__dirname) // read model dir
    .filter(f => f.match(/^(?!index).+\.js/g)) // filter for non-index js files
    .map(f => DB_INIT.import(PATH.join(__dirname, f))) //add models to sql
DB.forEach(m => (MODELS[m.name] = m)) // add models to map
DB.map(m => (m.associate ? m.associate(MODELS) : null)) // build associations if present in model

module.exports = MODELS
