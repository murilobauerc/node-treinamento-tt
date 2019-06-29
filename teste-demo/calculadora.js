const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CalculadoraSchema = new Schema({
    firstOperator: {type: Number},
    secondOperator: {type: Number}
})


module.exports = mongoose.model('Calculadora', CalculadoraSchema)