const mongoose = require('mongoose')

const paisSchema = mongoose.Schema({
    nome: String,
    sigla: String
})
const Pais = mongoose.model('Pais', paisSchema)


const brasil = new Pais({
    nome: 'Brasil',
    sigla: 'BR'
})

