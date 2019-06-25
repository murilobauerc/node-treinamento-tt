// HTTPS CONCEPTS: Requests, responses, status code, path
// REQUESTS: GET,POST,PUT, DELETE, HEAD, OPTIONS...
// RESPONSES: Status Code => 200,201, 404, 500
// PATH: /, /login, /register

const express = require('express')

const app = express()

app.get('/', (req,res) => {
    res.send('Hello from express!')
})

app.listen(8088, () => console.log('servidor rodando...'))