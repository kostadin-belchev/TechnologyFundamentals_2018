module.exports = {
  getIndex: function (req, res) {
    // TODO: get all open, inProgress and finished tasks, pass them to the index view and render it
    return res.render('index.hbs')
  },
  getCreate: function (req, res) {
    // render the create view
    return res.render('create.hbs')
  },
  postCreate: function (req, res) {
    // TODO: create new task and redirect to the index view
  },
  getEdit: function (req, res) {
    // TODO: get the task for editing, pass it to the edit view and render it
  },
  postEdit: function (req, res) {
    // TODO: update the task and redirect to index view
  },
  getDelete: function (req, res) {
    // TODO: get the task for deleting, pass it to the detele view and render it
  },
  postDelete: function (req, res) {
    // TODO: delete the task and redirect to the index view
  }
};