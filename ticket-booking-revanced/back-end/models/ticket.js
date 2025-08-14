const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  ticket_id: {
    type: String,
    required: true,
    unique: true,
  },

  event_id: {
    type: String,
    required: true,
  },

  event: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },
});

const TICKET = mongoose.model("ticket",schema);

module.exports = TICKET;
