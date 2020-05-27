const express = require('express')
const database = require('./database')

const app = express()

const port = 3003

app.use(express.json())

app.get('/produtos', (req, res, next) => {
    res.send(database.getProducts())
})

app.get('/produtos/:id', (req, res, next) => {
    const { id } = req.params
    res.send(database.getProduct(id))
})

app.post('/produtos', (req, res, next) => {
    const produto = database.saveProducts({
        nome: req.body.name,
        preco: req.body.price
    })

    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const { id } = req.params
    const produto = database.deleteProduct(id)
    res.send(produto)
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})