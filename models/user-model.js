const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    cart: {
      type: Array,
      default: [],
    },
    orders: {
      type: Array,
      default: [],
    },
    address: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    picture: {
      type: String,
      default:
        "https://res.cloudinary.com/dzqj1x8qk/image/upload/v1698851234/BagShop/default-user.png",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
// This code defines a Mongoose schema for a User model in a MongoDB database.
// It includes fields for user details such as fullname, email, password, admin status, cart,
// orders, address, contact number, and a profile picture. The schema also includes timestamps
// to track when the user was created and last updated. The default profile picture is set to a
// specific URL. The model is exported for use in other parts of the application.
