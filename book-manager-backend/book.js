const mongoose = require('mongoose')
const Schema = mongoose.Schema


const BookSchema = new Schema({
    title: {type: String, required: true},
    author: String,
    category: String,
    numberOfPages: {type: Number, min: 1},
    publicationYear: {type: Number, required:true}
})

module.exports = mongoose.model('Book', BookSchema)