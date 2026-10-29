const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: [2, "Name must have at least 2 characters"],
  },
  quantity: {
    type: Number,
    default: 0,
    min: [0, "Quantity cannot be negative"],
    validate: {
      validator: Number.isInteger,
      message: "Quantity must be a whole number",
    },
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price cannot be negative"],
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;