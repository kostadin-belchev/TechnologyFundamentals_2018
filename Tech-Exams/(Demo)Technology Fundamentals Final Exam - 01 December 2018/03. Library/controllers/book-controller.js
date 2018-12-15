const Book = require('../models/Book')

module.exports = {
  getIndex: function(req, res) {
    Book.find({})
      .then(books => res.render('index.hbs', { books }))
      .catch(err => console.log(err))
  },
  getCreate: function(req, res) {
    return res.render('create.hbs')
  },
  postCreate: function(req, res) {
    if (req.body.title && req.body.author && req.body.price) {
      Book.create(req.body)
        .then(createdTask => res.redirect('/'))
        .catch(err => console.log(err))
    }
  },
  getEdit: function(req, res) {
    const id = req.params.id

    Book.findById(id)
      .then(book => res.render('edit.hbs', { book }))
      .catch(err => console.log(err))
  },
  postEdit: function(req, res) {
    const id = req.params.id

    Book.findByIdAndUpdate(id, req.body)
      .then(() => res.redirect('/'))
      .catch(err => console.log(err))
  },
  getDelete: function(req, res) {
    const id = req.params.id

    Book.findById(id)
      .then(book => res.render('delete.hbs', { book }))
      .catch(err => console.log(err))
  },
  postDelete: function(req, res) {
    const id = req.params.id

    Book.findByIdAndRemove(id)
      .then(() => res.redirect('/'))
      .catch(err => console.log(err))
  },
}
