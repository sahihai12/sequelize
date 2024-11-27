const { sequelize } = require("../config/db");
const {DataTypes} =  require('sequelize');
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

module.exports = {
    Todo
}