const Sequelize = require('sequelize');


const sequelize = new Sequelize("my-express-app", "root", "", {
    host: "localhost",
    dialect : "mysql"
});

sequelize.authenticate().then(() => {
    console.log('connection sucess');
}).catch(err => {
    console.log(err);
})

const User = sequelize.define("user", {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    validate :{
      len: [4,6]
    }
  },
  name: {
    type: Sequelize.DataTypes.STRING,
  },
});

User.sync().then(async() => {
    const user = await User.create({
        name: "sahil"
    })
    console.log(user.toJSON());
}).catch((err) => {
    console.log('err' , err);
})