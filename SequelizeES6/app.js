import express  from "express";
import { sequelize } from "./config/db";
import { todoRouter } from "./routes/todo.routes";
import { Todo } from "./models/todo.model";

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
