const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (req, res) => {
    console.log(req.body)

    res.send('Foi')
})

app.post('/usuarios/:id', (req, res) => {
    console.log(req.body)
    console.log(req.params.id)

    res.send('Foi alterado')
})

app.listen(3003)