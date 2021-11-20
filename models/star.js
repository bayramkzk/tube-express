const mongoose = require("mongoose");

const starSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const Star = mongoose.model("Star", starSchema);

module.exports = Star;
