const mongoose = require("mongoose");
const timestamp = require("mongoose-timestamp");
const Schema = mongoose.Schema;

// Create Poster Schema
const posterSchema = new Schema({
  category: {
    type: String,
    required: true
  },
  units: {
    type: Number,
    required: true
  },
  defaultUri: {
    type: String
  },
  smallUri: {
    type: String
  },
  mediumUri: {
    type: String
  },
  largeUri: {
    type: String
  }
});

// Will add createdAt and updatedAt date automatically
posterSchema.plugin(timestamp);

module.exports = Poster = mongoose.model("posters", posterSchema);
