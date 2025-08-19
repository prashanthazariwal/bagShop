const mongoose = require("mongoose");


const ownerSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gstin: { type: String, required: true },
    products: {
      type: Array,  
        default: [],
    },
    contact: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
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

module.exports = mongoose.model("owner", ownerSchema);
  