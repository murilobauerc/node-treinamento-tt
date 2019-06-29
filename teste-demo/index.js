const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const PORT = 8080
const Calculadora = require('./calculadora')

const {connect} = mongoose.connect('mongodb://localhost:27017/teste_demo',  { useNewUrlParser: true }, async(err) => {
    if(err) console.error(err)
    else console.log('mongoose connected')
})

app
.use(bodyParser.json())

.post('/calculadora', (req,res) => {
    const calculadora = new Calculadora()
    
    calculadora.firstOperator = req.body.firstOperator
    calculadora.secondOperator = req.body.secondOperator
    calculadora.save()
    console.log(calculadora)
})

.get('/calculadora/:id', (req,res) => {
    const { id } = req.params.id
    Calculadora.findById(id, (error, calculadora) => {
        if(error) console.error(err)
        else res.json(calculadora)
    })
})


.listen(PORT, async () => {
    console.log(`Calculadora api is running on port: ${PORT}`)
    await connect()
})