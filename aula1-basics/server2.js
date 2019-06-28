const http = require('http')
const dataAtual = require('./dataAtual')
const url = require('url')
const fs = require('fs') // fs = file system

http.createServer((req,res) => {
    const {pathname} = url.parse(req.url)
    file = `./${pathname}`
    fs.readFile(file, (err,data) => {
       if(err) { 
         console.error(err)
         res.writeHead(404, {'Content-Type': 'text/plain'})
         return res.end('404 not found')
        }
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end(data.toString()) 
    })
}).listen(8081, () => console.log('servidor rodando...'))
