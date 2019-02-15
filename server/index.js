require('dotenv').config()
const massive = require('massive')
// const bodyParser = require('body-parser')
const ctrl = require('./controller.js')
const express = require('express')

const {CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
    console.log('connected to db')
})

app.get('/api/inventory', ctrl.getAll),

app.get('/api/inventory/:id', ctrl.getOne),

app.post('/api/inventory',  ctrl.addProduct),

app.delete('/api/inventory/:id', ctrl.deleteProduct),

app.put('/api/inventory/:id', ctrl.updateProduct)





app.listen(4000, () => {console.log('working on 4000')})