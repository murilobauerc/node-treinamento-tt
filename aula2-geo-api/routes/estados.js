const express = require('express')
const router = express.Router
const ESTADOS = require('../assets/estados.json')


router.get('/', (req,res) => {
    res.json(ESTADOS)
})

router.get('/:sigla', (req,res) => {
    const { sigla } = req.params
    const estadoRespectivoASigla = estadoRespectivoASigla.find(estadoRespectivoASigla => estadoRespectivoASigla.sigla === sigla)
    if(estadoRespectivoASigla){
        res.json(estadoRespectivoASigla)
    }else{
        res.sendStatus(404)
    }    
})

router.get('/:sigla/cidades/:id', (req,res) => {
    req.sigla = req.params.sigla
})


module.exports = router