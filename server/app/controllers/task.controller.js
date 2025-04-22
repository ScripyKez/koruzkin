const db = require("../models")
const Task = db.task

exports.createTask = (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    date: new Date(),
    isDone: false,
    usersEmail: req.body.usersEmail,
    authorEmail: req.body.authorEmail,
  })

  task.save((err, task) => {
    if (err) {
      res.status(500).send({ message: err })
      return
    }
    res.send(task)
  })
}
