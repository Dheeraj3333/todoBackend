const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const todoSchema = new Schema({
  tasks: {
    type: [
      {
        task: String,
        isCompleted: { type: Boolean, default: false },
      },
    ],
    required: true,
  },
  createdOn: {
    type: String,
    required: true,
    // default: () => new Date().toISOString().split("T")[0], // Sets today's date
  },
  deadline: {
    type: String,
    default: "as soon as possible",
  },
  isCompleted: {
    type: Boolean,
    required: true,
    default: false,
  },
});


const Todo = new mongoose.model("todos", todoSchema);

module.exports = Todo;
