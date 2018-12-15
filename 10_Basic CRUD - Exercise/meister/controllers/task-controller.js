const Task = require('../models/Task')

module.exports = {
  getIndex: function(req, res) {
    // TODO: get all open, inProgress and finished tasks, pass them to the index view and render it
    Task.find({}).then(allTasks => {
      const openTasks = allTasks.filter(task => task.status === 'Open')
      const inProgressTasks = allTasks.filter(task => task.status === 'In Progress')
      const finishedTasks = allTasks.filter(task => task.status === 'Finished')
      return res.render('index.hbs', { openTasks, inProgressTasks, finishedTasks })
    })
  },
  getCreate: function(req, res) {
    // render the create view
    return res.render('create.hbs')
  },
  postCreate: function(req, res) {
    // TODO: create new task and redirect to the index view
    if (req.body.title && req.body.status) {
      Task.create(req.body)
        .then(createdTask => res.redirect('/'))
        .catch(err => console.log(err))
    }
  },
  getEdit: function(req, res) {
    // TODO: get the task for editing, pass it to the edit view and render it
    const id = req.params.id

    Task.findById(id)
      .then(task => {
        switch (task.status) {
          case 'Open':
            task.open = true
            break
          case 'Finished':
            task.finished = true
            break
          case 'In Progress':
            task.inProgress = true
            break
          default:
            break
        }
        return res.render('edit.hbs', { task })
      })
      .catch(err => console.log(err))
  },
  postEdit: function(req, res) {
    // TODO: update the task and redirect to index view
    const id = req.params.id

    Task.findByIdAndUpdate(id, { title: req.body.title, status: req.body.status })
      .then(() => res.redirect('/'))
      .catch(err => console.log(err))
  },
  getDelete: function(req, res) {
    const id = req.params.id

    Task.findById(id)
      .then(task => {
        switch (task.status) {
          case 'Open':
            task.open = true
            break
          case 'Finished':
            task.finished = true
            break
          case 'In Progress':
            task.inProgress = true
            break
          default:
            break
        }
        return res.render('delete.hbs', { task })
      })
      .catch(err => console.log(err))
  },
  postDelete: function(req, res) {
    // TODO: delete the task and redirect to the index view
    const id = req.params.id

    Task.findByIdAndRemove(id)
      .then(() => res.redirect('/'))
      .catch(err => console.log(err))
  },
}
