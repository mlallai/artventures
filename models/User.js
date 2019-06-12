const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");
const Schema = mongoose.Schema;

// Create User Schema
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String
    // required: true
  },
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },
  phoneNumber: {
    type: String
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  address: {
    number: {
      type: Number,
      required: true
    },
    street: {
      type: String,
      required: true
    },
    zipCode: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    }
  }
});

// Will add createdAt and updatedAt date automatically
userSchema.plugin(timestamp);

module.exports = User = mongoose.model("users", userSchema);
