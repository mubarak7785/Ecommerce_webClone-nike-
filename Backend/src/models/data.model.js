const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    imgUrl: { type: String, required: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    Price: { type: Number, required: true },
    size: [{ type: String, required: false }],
    type: { type: String, required: true },
    color: { type: String, required: true },
    gender: { type: String, required: false }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("data", dataSchema);
