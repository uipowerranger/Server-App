var mongoose = require("mongoose");
var adminSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email_id: {
    type: String,
    index: true,
    unique: true,
  },
  phone_number: {
    type: String,
    index: true,
    unique: true,
  },
  image: String,
  password: String,
  is_active: String,
  created_at: Number,
  login_otp: Number,
  designation: String,
  address: String,
  city: String,
  state: String,
  post_code: String,
});

const Admin = mongoose.model("admin", adminSchema);
module.exports = Admin;
