const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 8090
const estadosRouter = require('./routes/estados')

app
.use(bodyParser.json())
.get('/', (req,res) => {
    res.send('Hello')
})
.use('/estados', estadosRouter)


app.listen(PORT, () => console.log(`servidor rodando na porta ${PORT}...`))  