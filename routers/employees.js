const express = require("express");
const router = express.Router();
const { getAllUsers, addTenNewUser } = require("../controller/index");
// const EmployeesData = require("../model/user");
// const faker = require("faker");
router.route("/").get(getAllUsers).post(addTenNewUser);

module.exports = router;
