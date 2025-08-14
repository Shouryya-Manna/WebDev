const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  event_id: {
    type: String,
    required: true,
    unique: true,
  },

  event_name: {
    type: String,
    required: true,
  },

  event_date: {
    type:String,
  },

  event_venue: {
    type: String,
  },
});

const EVENT = mongoose.model("event", schema);

module.exports = EVENT;
