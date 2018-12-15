const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: { type: mongoose.Schema.Types.String, required: true },
  author: { type: mongoose.Schema.Types.String, required: true },
  price: {
    type: mongoose.Schema.Types.Number,
    required: true,
    min: 1,
  },
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book
