const mongo = require('../data/mongo')
const jsonloader = require('../services/jsonloader')

const ESTADOS = jsonloader('estados.json')
const CIDADES = jsonloader('cidades.json')

const load = async () => {
    const estados = await mongo.estados()
    await estados.insertMany(ESTADOS)
    await estados.updateMany({},{$unset:{id:1}})
    const cidades = await mongo.cidades()
    await cidades.insertMany(CIDADES)
    await cidades.updateMany({},{$unset:{id:1}})
}
load().then(()=>{
    console.log('data loaded')
    process.exit()
})

