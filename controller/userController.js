const db = require("../utils/db-connection");

const addUserData = (req, res) => {
  console.log("addUserdata called");
  const { name, email } = req.body;
  const postQuery = `INSERT INTO Users(name,email) Values(?,?)`;

  db.execute(postQuery, [name, email], (err) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
      return;
    }
    console.log(`Successfully posted the data.`);
    res.status(201).send(`${name} successfully posted.`);
  });
};

const getUserData = (req, res) => {
  const getQuery = `Select * from Users`;
  db.execute(getQuery, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send(err.message);
      return;
    }
    console.log(`Successfully Retrieved Users data.`);
    res.status(201).json(results);
  });
};

module.exports = {
  addUserData,
  getUserData,
};
