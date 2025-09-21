const { Op } = require("sequelize");
const Buses = require("../models/busModel");
const addBusData = async (req, res) => {
  try {
    const { busNumber, totalSeats, availableSeats } = req.body;
    const BusData = await Buses.create({
      busNumber: busNumber,
      totalSeats: totalSeats,
      availableSeats: availableSeats,
    });

    res.status(201).send("Bus data added");
  } catch (err) {
    console.log(err);
    res.status(500).send("Unable to add Bus");
  }
};

const getBusDataWithAvailSeats = async (req, res) => {
  try {
    const { seats } = req.params;
    const BusSeatsAvailable = await Buses.findAll({
      where: {
        availableSeats: {
          [Op.gt]: seats,
        },
      },
    });

    if (!BusSeatsAvailable) {
      res.status(404).send("no seats Available");
    }
    res.status(200).json(BusSeatsAvailable);
  } catch (err) {
    console.log(err);
    res.status(500).send("unable to fetch the bus data ");
  }
};

module.exports = {
  addBusData,
  getBusDataWithAvailSeats,
};
