const Band = require('../models/Band');

module.exports = {
  getIndex: function (req, res) {
    Band.find({})
      .then(bands => res.render('index.hbs', { bands }))
      .catch(err => console.log(err))
  },
  getCreate: function (req, res) {
    return res.render('create.hbs')
  },
  postCreate: function (req, res) {
    if (req.body.name && req.body.members && req.body.honorarium && req.body.genre) {
      Band.create(req.body)
        .then(() => res.redirect('/'))
        .catch(err => console.log(err))
    }
  },
  getEdit: function (req, res) {
    const id = req.params.id

    Band.findById(id)
      .then(band => res.render('edit.hbs', { band }))
      .catch(err => console.log(err))
  },
  postEdit: function (req, res) {
    const id = req.params.id

    Band.findByIdAndUpdate(id, req.body)
      .then(() => res.redirect('/'))
      .catch(err => console.log(err))
  },
  getDelete: function (req, res) {
    const id = req.params.id

    Band.findById(id)
      .then(band => res.render('delete.hbs', { band }))
      .catch(err => console.log(err))
  },
  postDelete: function (req, res) {
    const id = req.params.id

    Band.findByIdAndRemove(id)
      .then(() => res.redirect('/'))
      .catch(err => console.log(err))
  }
};