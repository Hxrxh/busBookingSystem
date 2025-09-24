const Users = require("../models/userModel");
const Bookings = require("../models/bookingsModel");
const Buses = require("../models/busModel");
//one to many
Users.hasMany(Bookings);
Bookings.belongsTo(Users);

//one to many bus to bookings

Buses.hasMany(Bookings);
Bookings.belongsTo(Buses, { as: "Bus" });
module.exports = {
  Users,
  Bookings,
  Buses,
};
