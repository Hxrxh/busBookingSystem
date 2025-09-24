const express = require("express");
const router = express.Router();
const busController = require("../controller/busController");
router.post("/", busController.addBusData);
router.get("/available/:seats", busController.getBusDataWithAvailSeats);
router.get("/:id/bookings", busController.getBusBookings);
module.exports = router;
