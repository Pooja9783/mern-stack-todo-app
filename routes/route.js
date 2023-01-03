import express from "express";

import {
  addtodo,
  getAllTodo,
  toggleTodo,
  updateTodo,
  deleteTodo,
} from "../controller/todo-controller.js";

const route = express.Router();

route.post("/todos", addtodo);
route.get("/todos", getAllTodo);
route.get("/todos/:id", toggleTodo);
route.put("/todos/:id", updateTodo);
route.delete("/todos/:id", deleteTodo);

export default route;
