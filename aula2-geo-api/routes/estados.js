const express = require('express')
const router = express.Router()
const mongo = require('../data/mongo')
const cidadesRouter = require('./cidades')

router.get('/',async (req,res)=>{
    const estados = await mongo.estados()
    res.json(await estados.find({}).toArray())
})

router.post('/',async (req,res)=>{
    const { sigla, nome } = req.body
    if(!sigla || !nome) {
        res.send(400).send('Missing arguments')
        return
    }
    const estado = {
        nome,
        sigla
    }
    const estados = await mongo.estados()
    await estados.insertOne(estado)
    res.sendStatus(201)
})

router.get('/:sigla',async (req,res)=>{
    const { sigla } = req.params
    const estados = await mongo.estados()
    const query = {sigla: {$regex: `^${sigla}$`, $options: 'i'}}
    const estado = await estados.findOne(query)
    if (estado)
        res.json(estado)
    else
        res.sendStatus(404)
})

router.use('/:sigla/cidades', (req,res, next)=> {
    const { sigla } = req.params
    req.parentParams = {}
    req.parentParams.sigla = sigla.toUpperCase()
    next()
}, cidadesRouter)

module.exports = router