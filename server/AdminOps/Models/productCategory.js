const { ObjectID } = require("mongodb");
var mongoose = require("mongoose");
var categorySchema = new mongoose.Schema({
  // _id: mongoose.Types.ObjectId,
  category_name: String,
  is_active: String,
  created_at: Number,
});

const Category = mongoose.model("category", categorySchema);
module.exports = Category;
