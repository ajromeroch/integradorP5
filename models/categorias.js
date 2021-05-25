const S = require('sequelize')
const db = require('../db')

class categorias extends S.Model {}

categorias.init({
    nombre: S.DataTypes.STRING
}, {sequelize: db, modelName: 'categorias', timestamps: false})

module.exports = categorias