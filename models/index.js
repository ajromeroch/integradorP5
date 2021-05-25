const products = require('./products')
const categorias = require('./categorias')

//products.hasMany(categorias);

categorias.belongsTo(products, {as: 'order'})

module.exports = {products, categorias}