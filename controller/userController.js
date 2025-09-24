const db = require("../utils/db-connection");
const Users = require("../models/userModel");
const Buses = require("../models/busModel");
const Bookings = require("../models/bookingsModel");
const addUserData = async (req, res) => {
  try {
    const { name, email } = req.body;
    const UserData = await Users.create({
      name: name,
      email: email,
    });

    res.status(201).send("User data added");
  } catch (err) {
    console.log(err);
    res.status(500).send("Unable to add User");
  }
};

const getUserData = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send("No user ");
  }
};
const addBookingForUser = async (req, res) => {
  try {
    const { userId, busId, seatNumber } = req.body;
    const bookedUser = await Bookings.create({
      UserId: userId,
      BusId: busId,
      seatNumber: seatNumber,
    });
    res.status(201).json(bookedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
};

const getUserBookings = async (req, res) => {
  try {
    const { id } = req.params;
    const userWithBooking = await Bookings.findAll({
      where: {
        UserId: id,
      },
      include: [{ model: Buses, as: "Bus", attributes: ["busNumber"] }],
    });

    res.status(200).json(userWithBooking);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports = {
  addUserData,
  addBookingForUser,
  getUserData,
  getUserBookings,
};
