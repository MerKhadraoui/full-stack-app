const fackerData = require("../model/user");
const express = require("express");
const EmployeesData = require("../model/user");
const faker = require("faker");
const getAllUsers = async (req, res) => {
  try {
    const data = await fackerData.find();
    console.log(data);
    if (data) {
      // res.render("home",{data:data})
      res.render("home", { data });
    } else {
      res.render("home", { data: {} });
    }
  } catch (err) {
    res
      .status(err.status || 500)
      .json({ message: ` this is the err ${err.message}` });
  }
};
// add 10 user
const addTenNewUser = async (req, res) => {
  for (let i = 0; i < 10; i++) {
    const fakeData = new EmployeesData({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      password: faker.internet.password(),
      city: faker.address.city(),
      avatar: faker.image.avatar(),
      jobTitle: faker.name.jobTitle(),
      phoneNumber: faker.phone.phoneNumber(),
    });

    try {
      await fakeData.save();
      //   res.status(200).json(fakeData);
      console.log(fakeData);
    } catch (err) {
      // 500 Internal server error
      console.log(err);
    }
  }
  res.redirect("/employees");
};
module.exports = { getAllUsers, addTenNewUser };
