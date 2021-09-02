const mongoose = require("mongoose");
const fackerSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: String,
  password: { type: String },
  city: String,
  avatar: String,
  jobTitle: String,
  phoneNumber: String,
});
module.exports = mongoose.model("fackerCollection", fackerSchema);
