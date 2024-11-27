const Sequelize = require("sequelize");

const sequelize = new Sequelize("my-express-app", "root", "", {
  host: "localhost",
  dialect: "mysql",
});



module.exports = {
  sequelize,
};
