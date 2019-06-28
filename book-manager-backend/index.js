const express = require('express')
const bodyParser = require('body-parser')
const PORT = 8080
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const Book = require('./book')
const URL = 'mongodb://localhost:27017/book_manager'
const { connect } = mongoose.connect(URL, {useNewUrlParser: true}, async(err) => {
    if(err) {
        console.error(err)
    }
    console.log('Mongoose connected')
})

app
.use(bodyParser.json())
.use(cors())

.get('/books', (req,res) => {
    Book.find((error, books) => {
        if(error) res.status(500)
        else res.json(books)
    })
})

.post('/books', (req,res) => {
    const book = new Book()

    book.title = req.body.title
    book.author = req.body.author
    book.category = req.body.category
    book.numberOfPages = req.body.numberOfPages
    book.publicationYear = req.body.publicationYear
    book.save()
    console.log(book)
})

.get('/books/:id', (req,res) => {
    Book.findById(req.params.id, (error, books) => {
        if(error) res.status(500)
        else res.json(books)
    })
})

.put('/books/:id', (req,res) => {
    Book.findById(req.params.id, (error,book) => {
        if(error) res.status(500).json({error: 'Something went wrong'})
        if(!book) res.status(404).json({error: 'Book not found'})
        else{
            book.title = req.body.title
            book.author = req.body.author
            book.category = req.body.category
            book.numberOfPages = req.body.numberOfPages
            book.publicationYear = req.body.publicationYear
            book.save(book, error => {
                if(error) res.status(404).json({error: `Not possible to update the book: ${book}`})
                else res.json()
            })
        }
    })
})

.delete('/books/:id', (req,res) => {
    const { id } = req.params
    Book.findOneAndRemove({ _id: id}, error => {
        if(error) res.status(404).json({error: "Not found"})
        else res.json()
    })
})



.listen(PORT, async() => { 
    console.log(`Book api is running on port: ${PORT}`)
    await connect()
    console.log('mongoose connected')
})
