const { createTask, updateTask, getTasks, deleteTask } = require("../controllers/taskController");
const { auth } = require("../middlewares/auth");

const taskRouter = require("express").Router();


taskRouter.post("/", auth, createTask);
taskRouter.get("/", auth, getTasks);
taskRouter.put("/:id", auth, updateTask);
taskRouter.delete("/:id", auth, deleteTask);

module.exports = taskRouter;