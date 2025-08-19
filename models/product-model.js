const mongoose = require("mongoose");


const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    imageUrl: { type: String, required: true },
    stock: { type: Number, default: 0 },
    ratings: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    bgColor: { type: String, default: "#ffffff" },
    pannelColor: { type: String, default: "#f0f0f0" },
    textColor: { type: String, default: "#000000" },
    reviews: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
// This code defines a Mongoose schema for a User model in a MongoDB database.
// It includes fields for user details such as fullname, email, password, admin status, cart,
// orders, address, contact number, and a profile picture. The schema also includes timestamps
// to track when the user was created and last updated. The default profile picture is set to a
// specific URL. The model is exported for use in other parts of the application.   