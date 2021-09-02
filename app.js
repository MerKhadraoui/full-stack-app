const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
const userController = require("./controller");
const path = require("path");
const employees = require("./routers/employees");
const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB is connected"))
  .catch((err) => {
    console.log(`There was error ${err.message}`);
  });
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));
app.use("/employees", employees);
app.get("/", (req, res) => {
  res.status(200).send("Welcome to our app");
});

module.exports = app;
