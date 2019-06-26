// HTTPS CONCEPTS: Requests, responses, status code, path
// REQUESTS: GET,POST,PUT, DELETE, HEAD, OPTIONS...
// RESPONSES: Status Code => 200,201, 404, 500
// PATH: /, /login, /register

const express = require('express')
const productsRouter = require('./routes/products')
const app = express()
const bodyParser = require('body-parser')

const dataAtual = (req,res,next) => {
    req.dataAtual = new Date();
    next()
}

const users = [
    { id: '1', name: 'John'},
    { id: '2', name: 'Anna'}
]


app
.use(bodyParser.json())
.use(express.static('public'))
.use('/login', dataAtual)
.use('/products', dataAtual, productsRouter)
.use('/products/:id', productsRouter)

.get('/', (req,res) => {    
    res.status(200).send(`Hello from express! ${req.dataAtual}`)
})

.post('/login', (req,res) => {
    const { user, password} = req.body
    res.send(`POST recebido em /login ${req.dataAtual}`)
})

.put('/settings', (req,res) => {
    res.send('PUT recebido em /settings')
})

.delete('/logs', (req,res) => {
    res.send('DELETE recebido em /logs')
})

.all('/admin', (req,res,next) => { // middleware vai ser logado toda vez que for acessada a rota '/admin'
    console.log('/admin acessado em', req.method, new Date());
    next()
})

.get('/admin', (req, res) => {
    res.send('Welcome to admin area!')
})

.get('/users/:userId', (req,res) => {
    const { userId } = req.params
    const user = users.find(user => user.id === userId)

    if(user) {
        res.json(user)
    }else{
        res.sendStatus(404)
    }
})

.get('/users/:userId/books/:bookId', (req,res) => {
    const { userId, bookId } = req.params
    res.send(`user: ${userId} - book: ${bookId}`)
})

.get('/users', (req,res) => {
    res.json(users)
})

app.listen(8088, () => console.log('servidor rodando...'))  