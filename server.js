const http = require('http')
const dataAtual = require('./dataAtual')
const url = require('url')

http.createServer((req,res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain'})
    const { query } = url.parse(req.url, true)
    console.log(req.url, query)
    res.end('Hello, World')
}).listen(8080, () => console.log('servidor rodando...'))
