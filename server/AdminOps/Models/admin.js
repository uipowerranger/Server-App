var mongoose = require("mongoose");
var adminSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email_id: String,
  phone_number: String,
  image: String,
  password: String,
  is_active: String,
  created_at: Number,
});

const Admin = mongoose.model("admin", adminSchema); 
module.exports = Admin;
