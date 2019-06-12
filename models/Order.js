const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");
const Schema = mongoose.Schema;

// Create User Schema
const orderSchema = new Schema({
  posters: [
    {
      poster: {
        type: Schema.Types.ObjectId,
        ref: "posters",
        required: true
      },
      units: {
        type: Number,
        required: true
      },
      size: {
        type: String
      }
    }
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  paymentStatus: {
    type: Boolean,
    required: true,
    default: false
  }
});

// Will add createdAt and updatedAt date automatically
orderSchema.plugin(timestamp);

module.exports = Order = mongoose.model("orders", orderSchema);
