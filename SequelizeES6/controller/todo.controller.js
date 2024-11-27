import { Todo } from "../models/todo.model";


const getTodo = async(req, res) => {
    const todo = await Todo.findAll() 
    console.log('all todo ---------------- ' , todo);
    res.json(todo);
};

const createTodo = async (req, res) => {
    const {task } = req.body
    const todo = await Todo.create({
        task : task
    }) 
    console.log('todo created ---------------- ' , todo);
    res.json(todo);
};

const deleteTodo = async (req, res) => {
    const {id} = req.params
    const todo = await Todo.findByPk({
        id
    }) 
    console.log('todo deleted  ---------------- ' , todo);
    res.json(todo)
};

const updateTodo = async (req, res) => {
    const {id} = req.params
    const { task } = req.body;
    const todo = await Todo.findByPk({
        id
    }) 
    todo.task = task
    todo.save()
    console.log('todo created' , todo);
    res.json(todo);

};

export  {
    createTodo , getTodo , updateTodo , deleteTodo
}