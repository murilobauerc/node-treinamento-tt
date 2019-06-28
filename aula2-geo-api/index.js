const PORT = 8080
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const estadosRouter = require('./routes/estados')
const authMiddleware = require('./middlewares/auth')

// app.use(authMiddleware)
app.use(bodyParser.json())
app.use('/estados',estadosRouter)

app.listen(PORT, ()=>console.log('Geo API rodando em localhost:',PORT))