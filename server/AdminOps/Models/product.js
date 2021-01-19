const { ObjectID } = require("mongodb");
var mongoose = require("mongoose");
var productSchema = new mongoose.Schema({
  category_details: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
  sub_category_details: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "sub_category",
  },
  state_details: String,
  post_code_details: String,
  home_page_display: String,
  item_name: String,
  item_image: String,
  items_available: String,
  price: String,
  weight: String,
  has_offer: String,
  offer_details: String,
  is_active: String,
  has_deal: String,
  deal_details: String,
  created_at: Number,
  offer_from_date: Number,
  offer_to_date: Number,
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;
