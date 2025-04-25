const mongoose = require("mongoose")

const Task = mongoose.model(
  "Task",
  new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    isDone: Boolean,
    usersEmail: [String],
    authorEmail: String,
  })
)

module.exports = Task
