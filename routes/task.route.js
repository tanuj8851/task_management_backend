import express from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "./../controllers/task.controller.js";

const router = express.Router();

router.get("/tasks", getAllTasks);
router.post("/tasks", createTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

export default router;
