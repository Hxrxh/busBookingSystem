const express = require("express");
const app = express();
const db = require("./utils/db-connection");
const userRouter = require("./routes/usesrRouter");
const busRouter = require("./routes/busRouter");

require("./models");
app.use(express.json());
app.use("/users", userRouter);
app.use("/buses", busRouter);

//listen[ing to the server
db.sync({ alter: true })
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running");
    });
  })
  .catch((err) => {
    console.log(err);
  });
