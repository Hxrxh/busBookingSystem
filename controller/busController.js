const db = require("../utils/db-connection");
const addBusData = (req, res) => {
  const { busNumber, totalSeats, availableSeats } = req.body;
  const addBusQuery =
    "Insert into Buses(busNumber,totalSeats,availableSeats) values (?,?,?);";

  db.execute(
    addBusQuery,
    [busNumber, totalSeats, availableSeats],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send(err.message);
        return;
      }

      console.log("Successfully added the Bus");
      res
        .status(201)
        .send(`Successfully added Bus with Bus number  ${busNumber}`);
    }
  );
};

const getBusDataWithAvailSeats = (req, res) => {
  const { seats } = req.params;
  const availSeatBusQuery = "Select * from Buses where availableSeats > ?";

  db.execute(availSeatBusQuery, [seats], (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).send(`No such buses Avaialble with ${seats} seats`);
    }

    res.status(200).json(results);
  });
};

module.exports = {
  addBusData,
  getBusDataWithAvailSeats,
};
