const Todo = require("../models/todo");

async function handleGetTodos(req, res) {
  //   const { month, date } = req.query;
  const todo = await Todo.find();

  console.log("got the get request");

  res.send(todo);
  console.log("got the request from " + req.path);
}

// handler function to serve particular date route
async function handleGetParticularTodos(req, res) {
  const date = req.params.date;
  const todo = await Todo.find({ createdOn: date });

  todo ? res.json(todo) : res.json(null);
}

async function handlePostTodo(req, res) {
  const { tasks, createdOn } = req.body;
  const newTodoEntry = {
    tasks: tasks,
    createdOn: createdOn,
    isCompleted: tasks.every((task) => task.isCompleted),
  };
  const response = await Todo.findOneAndUpdate(
    { createdOn: createdOn },
    newTodoEntry,
    { new: true, upsert: true }
  );

  res.json({ response: response });
}

module.exports = {
  handleGetTodos,
  handlePostTodo,
  handleGetParticularTodos,
};
