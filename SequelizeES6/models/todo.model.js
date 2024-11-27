import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

const Todo = sequelize.define("todo", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  task: {
    type: DataTypes.STRING,
    unique: true,
  },
});

export {
    Todo
}