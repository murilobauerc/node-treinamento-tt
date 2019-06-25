const http = require('http')
const dataAtual = require('./dataAtual')
const url = require('url')
const fs = require('fs') // fs = file system

http.createServer((req,res) => {
    res.writeHead(200, { 'Content-Type': 'text/html'})
    const { query } = url.parse(req.url, true)
    console.log(req.url, query)

    fs.readFile('./teste.txt', (err,data) => {
        if(err) { console.error(err);
            return res.end('erro na leitura')
        }
        res.end(data.toString())
    })
}).listen(8080, () => console.log('servidor rodando...'))
