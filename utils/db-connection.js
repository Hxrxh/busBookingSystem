const mySql = require("mysql2");
const { Sequelize } = require("sequelize");

//defining the connection attributes
const sequelize = new Sequelize("bookingsystem", "root", "lenovog5012345", {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("connection with database has been established");
  } catch (err) {
    console.log(err);
    connection.end();
    return;
  }
})();

module.exports = sequelize;
