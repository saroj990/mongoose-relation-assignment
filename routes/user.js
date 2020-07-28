const express = require("express");
const router = express.Router();

const {
  addTodosToUser,
  getUserById,
  getUser,
  UpdateUser,
  getAllUsers,
  getToDos,
  getRegUsers,
  addToDoUser
} = require("../controllers/user");
const {
  isSignedIn,
  isAuthenticated,
} = require("../controllers/auth");



router.post("/", addToDoUser)
router.get("/getregusers", getRegUsers)
router.param("/userId", getUserById);
router.get("/getAllUsers", getAllUsers)
router.get("/:userId", isSignedIn, isAuthenticated, getUser);
router.put("/:userId", isSignedIn, isAuthenticated, UpdateUser);
router.get("/:userId/todos", isSignedIn, isAuthenticated, getToDos);
router.put('/:userId/addTodos', addTodosToUser)

module.exports = router;