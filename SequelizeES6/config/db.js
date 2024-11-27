import Sequelize from "sequelize";


const sequelize = new Sequelize("my-express-app", "root", "", {
  host: "localhost",
  dialect: "mysql",
});



export  { sequelize };
