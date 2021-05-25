const volleyball = require('volleyball')
const express = require('express')
const app = express()
const routes = require('./routes')
const db = require('./db')

app.use(volleyball)
app.use(express.json())
app.use(routes)

// Middleware
app.use((err, req, res, next) => {
    if(err) console.log('Error customizado')
})

db.sync({force: true})
.then(()=> {
    //console.log('connected to the database')
    app.listen(3000, () => console.log('listening on 3000. http://localhost:3000'))
})
.catch(err => console.log(err))


