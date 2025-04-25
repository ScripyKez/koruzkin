const mongoose = require("mongoose")

const KanbanBoard = mongoose.model(
  "kanban-board",
  new mongoose.Schema({
    title: String,
    columns: String,
    tasks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task",
      },
    ],
  })
)

module.exports = KanbanBoard
