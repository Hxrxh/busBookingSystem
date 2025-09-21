const express = require("express");
const app = express();
const userRouter = require("./routes/usesrRouter");
const busRouter = require("./routes/busRouter");
app.use(express.json());
app.use("/users", userRouter);
app.use("/buses", busRouter);

//listening to the server
app.listen(3000, () => {
  console.log("Server running");
});
