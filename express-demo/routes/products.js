const express = require('express')
const router = express.Router()

const products = [
    { id: '1', name: 'iPhone'},
    { id: '2', name: 'iPad'}
]


router.get('/', (req,res) => {
    console.log(`dataAtual:`, req.dataAtual);
    
    res.json(products)
})

router.get('/:id', (req,res) => {
    const { id } = req.params
    const product = products.find(product => product.id === id)
    if(product){
        res.json(product)
    }else{
        res.sendStatus(404)
    }
})


module.exports = router