const { ObjectID } = require("mongodb");
var mongoose = require("mongoose");
var subCategorySchema = new mongoose.Schema({
  category_details: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
  sub_category_name: String,
  is_active: String,
  created_at: Number,
});

const SubCategory = mongoose.model("sub_category", subCategorySchema);
module.exports = SubCategory;
