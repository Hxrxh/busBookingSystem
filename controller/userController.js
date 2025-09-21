const db = require("../utils/db-connection");
const Users = require("../models/userModel");
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

module.exports = {
  addUserData,
  getUserData,
};
