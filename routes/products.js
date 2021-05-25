const express = require('express')
//const { route } = require('.')
const router = express.Router()
const {products, categorias} = require('../models')

// ruta para obtener todos los productos
router.get('/', (req, res, next) => {
    products.findAll()
    .then(data => {
        res.status(200)
        res.send(data)})
})


//ruta para crear un producto
router.post('/', (req, res, next) => {
    const {nombre, precio, descripcion, disponible, stock, categoria} = req.body

    products.findOrCreate({
        where: {
            nombre: nombre,
            precio: precio,
            descripcion: descripcion,
            disponible: disponible,
            stock: stock,
        }
    })
    .then((data) => {
        //console.log('esto es lo que esta en data: ', data)
        //console.log('esto es lo que esta en data[0]: ', data[0])
        const prod = data[0];
        categorias.create({
            nombre: categoria
        })
        .then(cat => {
            //console.log(cat);
            cat.setOrder(prod)})
        .then(()=> res.redirect('/'))
    })



    // products.create({
    //     nombre: nombre, precio: precio, descripcion: descripcion, disponible: disponible, stock:stock
    // })
    // .then(() => {
    //     res.status(201)
    //     res.redirect('/') // cambiar aca despues por un redirect
    // })
})

//ruta para obtener un producto en particular
router.get('/:product', (req, res, next) => {
    const prod = req.params.product;
    products.findOne({
        where: {nombre: prod}
    })
    .then((data) => {
        res.status(200);
        res.send(data);
    })
    .catch(err => console.log(err))

})

// Una ruta para modificar un producto en particular.
router.put('/:product', (req, res, next) => {
    const keys = Object.keys(req.body);
    const prod = req.params.product;
    products.findOne({
        where: {nombre: prod}
    })
    .then((data) => {
        for(let i = 0; i < keys.length; i++) {
            data[keys[i]] = req.body[keys[i]]; 
        }
        data.save()
        res.redirect('/')
    })
})

router.delete('/:product', (req, res, next)=> {
    const prod = req.params.product;
    products.findOne({
        where: {nombre: prod}
    })
    .then((data) => {
        data.destroy()
        res.redirect('/');
    })
    .catch(err => console.log(err))
})

module.exports = router