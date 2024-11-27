const express = require('express');
const { createTodo, getTodo, updateTodo, deleteTodo } = require('../controller/todo.controller');

const todoRouter = express.Router()

todoRouter.get("/", getTodo);
todoRouter.post("/", createTodo);
todoRouter.patch("/:id", updateTodo);
todoRouter.delete("/:id", deleteTodo);

module.exports = {
    todoRouter
}