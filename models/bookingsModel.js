// /   `create table IF NOT EXISTS Bookings(
// // id int AUTO_INCREMENT PRIMARY KEY,
// // seatNumber int)`,
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../utils/db-connection");

const Bookings = sequelize.define("Bookings", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  seatNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
module.exports = Bookings;
