const express = require('express')
const router = express.Router
const CIDADES = require('../assets/cidades.json')

router.get('/', (req,res) => {
    res.json(CIDADES)
})

// .get('/:id', (req,res) => {
//     const { sigla } = req
//     const { id } = 
// })

// .get('/:sigla/cidades', (req,res) => {
//     const {sigla} = req.params
//     const estadoRespSiglaCid = estadoRespSiglaCid.filter()
// })

router.get('/:sigla/cidades/:id', (req,res) => {
    req.sigla = req.params.sigla
})

module.exports = router