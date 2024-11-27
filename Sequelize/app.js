const express = require("express");
const { sequelize } = require("./config/db");
const { todoRouter } = require("./routes/todo.routes");
const { Todo } = require("./models/todo.model");

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.authenticate().then(() => {
    console.log("connection sucess");
}).catch((err) => {
    console.log(err);
});

Todo.sync({alter : true})

app.use('/todo' , todoRouter)

app.listen(8000, () => {
    console.log('app is listening at PORT 8000');
})
