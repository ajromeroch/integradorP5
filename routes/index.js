const express = require('express')
const router = express.Router()
const products = require('./products')

// router.use((req, res, next) => {
//     res.send('llegue bien a routes')
// })

router.use('/products', products)
router.use('/', products)


module.exports = router