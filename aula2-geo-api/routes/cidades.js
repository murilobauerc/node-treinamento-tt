const { ObjectId } = require('mongodb')
const express = require('express')
const router = express.Router()
// const jsonloader = require('../services/jsonloader')
// const autoincrement = require('../util/autoincrement')

const mongo = require('../data/mongo')
// const estados = jsonloader('estados.json')
// const cidades = jsonloader('cidades.json')


router.get('/',async (req,res)=>{
    const { sigla } = req.parentParams
    const cidades = await mongo.cidades()
    const query = {estado: {$regex: `^${sigla}$`, $options: 'i'}}
    return res.json(await cidades.find(query).toArray())
})
router.post('/',async (req,res)=>{
    const { sigla } = req.parentParams
    const { nome } = req.body
    if(!nome) {
        res.send(400).send('Missing arguments')
        return
    }
    const cidade = {
        nome,
        estado: sigla
    }
    const cidades = await mongo.cidades()
    await cidades.insertOne(cidade)
    res.sendStatus(201)
})

router.get('/:id',async (req,res)=>{
    const { sigla } = req.parentParams
    const { id } = req.params

    const cidades = await mongo.cidades()
    const query = {_id: ObjectId(id), estado: {$regex: `^${sigla}$`, $options: 'i'}}

    const cidade = await cidades.findOne(query)
    if (cidade)
        res.json(cidade)
    else
        res.sendStatus(404)
})


module.exports = router