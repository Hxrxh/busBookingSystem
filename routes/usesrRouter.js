const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.post("/", userController.addUserData);
router.get("/", userController.getUserData);
router.post("/bookings", userController.addBookingForUser);
router.get("/:id/bookings", userController.getUserBookings);
module.exports = router;
