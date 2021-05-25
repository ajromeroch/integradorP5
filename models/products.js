const S = require('sequelize');
// const { not } = require('sequelize/types/lib/operators');
const db = require('../db')
// const { get } = require('../routes');
// const { beforeCreate } = require('./categorias');

class products extends S.Model {}

products.init({
    nombre: {
        type: S.DataTypes.STRING},
    //precio: S.DataTypes.INTEGER,
    precio: {
        type: S.DataTypes.INTEGER,
        get() {
            return '$ ' + this.getDataValue('precio')
        }},
    descripcion: S.DataTypes.TEXT,
    stock: S.DataTypes.INTEGER,
    disponible: {
        type: S.DataTypes.BOOLEAN,
        //defaultValue: true,
        set(lala) {
            console.log(lala)
            console.log(this.getDataValue('stock'))
            if(this.stock === 0) this.setDataValue('disponible', false);
        }},
        ////ver aca que tengo que hacer con el set (no me funciona), me falta tambien los metodos para poder hacerlo. Y si quiero hacer un form tambien
        ///// estaria bueno. ESO! hay que ver que hacer aca, siento que estoy algo lejos.
}, {sequelize: db, modelName: 'products', timestamps: false})

// products.noStock = function() {
//     // como ver todos los productos instanciados ?
// }

products.prototype.ganancias = () => {
    return this.precio * this.stock
}

// products.addHook('beforeCreate', (notAv) => {

//     if(!this.disponible)
//         notAv.nombre = this.getDataValue(nombre) + ' **NO DISPONIBLE**'
// })

module.exports = products