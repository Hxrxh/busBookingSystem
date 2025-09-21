const mySql = require("mysql2");

//defining the connection attributes
const connection = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "lenovog5012345",
  database: "bookingsystem",
  // multipleStatements:true
});

//connecting the database
connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("connection established");
});
//query for db
const connectionQuery = [
  `create table IF NOT EXISTS Users(
id int AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(20),
email VARCHAR(20))`,
  `create table IF NOT EXISTS Buses(
id int AUTO_INCREMENT PRIMARY KEY,
busNumber int ,
totalSeats int ,
availableSeats int)`,
  `create table IF NOT EXISTS Bookings(
id int AUTO_INCREMENT PRIMARY KEY,
seatNumber int)`,
  `create table  IF NOT EXISTS Payments(
id int AUTO_INCREMENT PRIMARY KEY,
amountPaid int ,
paymentStatus VARCHAR(10));`,
];
connectionQuery.forEach((query) => {
  connection.execute(query, (err) => {
    if (err) {
      console.log(err);
      connection.end();
      return;
    }
  });
});

module.exports = connection;
