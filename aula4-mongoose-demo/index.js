const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/teste02'

const paisSchema = mongoose.Schema({
    nome: String,
    sigla: String,
    populacao: Number
}, {collection: 'paises', versionKey: false})

const Pais = mongoose.model('Pais', paisSchema)

const cafeSchema = mongoose.Schema({
    ovos: {
        type: Number, min: [6, 'mínimo é 6'], max: [12, 'máximo 12']
    },
    bacon: {
        type: Number, required: [true, 'bacon obrigatório']
    },
    bebida: {
        type: String,
        enum: ['café, chá'],
        required: function() { return this.bacon > 3 } 
    }
})

const Cafe = mongoose.model('Cafe', cafeSchema)

mongoose.connect(url, {useNewUrlParser: true}, async(err) => {
    if(err) {
        console.error(err)
    }
    console.log('Mongoose connected')

     await inserirPais()
     await buscarPaises()
    // await buscarPaisPorId()
    // await atualizarPais()
    await removerPais()

    await inserirCafe()
})

const inserirPais = async () => {
    const brasil = new Pais({
    nome: 'Brasil',
    sigla: 'BR',
    populacao: 220000000
    }
)

await brasil.save()
console.log(brasil)
}

const buscarPaises = async () => {
    const paises = await Pais.find()
    console.log('paises' ,paises)
}

const buscarPaisPorId = async () => {
    console.log(
        mongoose.mongo.ObjectID.isValid('5d15488585233b13400a415b'),
        mongoose.mongo.ObjectID.isValid('abc')
    )
    const pais = await Pais.findById('5d15488585233b13400a415b')
    console.log('país', pais)
}

const atualizarPais = async () => {
    await Pais.findOneAndUpdate({sigla: 'BR'}, {nome: 'Braziu'})
    pais.save()
}

const removerPais = async () => await Pais.findOneAndDelete({sigla: 'BR'})

const removerTodosPaises = async () => await Pais.deleteMany({sigla: 'BR'})

const inserirCafe = async () => {
    const cafe = new Cafe({
        ovos: 4
    })
    try {
        await cafe.save()
    }catch(ex){
        console.error(ex.errors)
    }
}