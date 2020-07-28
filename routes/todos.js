var express = require("express");
var router = express.Router();
const {
  getTodos,
  getUsertodos,
  addTodo,
  updateTodos
} = require("../controllers/todos");
const {
  getUserById,
  addToDoUser
} = require("../controllers/user");

router.get("/", getTodos)
router.get("/:id", getUsertodos);
//for adding new todo
router.post("/add", addTodo);
router.put("/:userId/update/:id", updateTodos);
router.param("userId", getUserById);

module.exports = router;