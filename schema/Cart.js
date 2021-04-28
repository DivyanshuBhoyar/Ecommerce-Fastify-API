const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  id: String,
  userId: String,
  products: [Object],
  date: String,
  productsRef: [{ type: Schema.Types.ObjectId, ref: "Product", quantity: 1 }],
});

const Cart = new mongoose.model("Cart", CartSchema);
module.exports = Cart;
