var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email_id: String,
  phone_number: String,
  dob: String,
  gender: String,
  address: String,
  image: String,
});

const User = mongoose.model("users", userSchema); 
module.exports = User;
