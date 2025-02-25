const express = require("express");
const router = express.Router();
const { handleGetTodos, handleGetParticularTodos,handlePostTodo } = require("../controllers/todo");

router.get("/", handleGetTodos);
router.get("/:date", handleGetParticularTodos);
router.post("/",handlePostTodo);
// router.get("/:month", handleGetTodoMonth);

module.exports = router;
