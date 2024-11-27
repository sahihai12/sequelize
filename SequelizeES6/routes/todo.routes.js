import express from 'express';
import { createTodo, getTodo, updateTodo, deleteTodo } from '../controller/todo.controller';

const todoRouter = express.Router()

todoRouter.get("/", getTodo);
todoRouter.post("/", createTodo);
todoRouter.patch("/:id", updateTodo);
todoRouter.delete("/:id", deleteTodo);

export { todoRouter }