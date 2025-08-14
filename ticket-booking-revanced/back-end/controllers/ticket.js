const { v4: uuidv4 } = require("uuid");
const mongoose = require("mongoose");
const TICKET = require("../models/ticket");
const EVENT = require("../models/event");

async function handleGenerateTicket(req, res) {
  try {
    const { event_id, user_name, user_age } = req.body;

    const event = await EVENT.findOne({ event_id });

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    const ticket_Id = uuidv4();

    const ticket = await TICKET.create({
      ticket_id: ticket_Id,
      event_id: event.event_id,
      event: event.event_name,
      name: user_name,
      age: user_age,
    });

    res.status(201).json({ message: "Ticket created successfully", ticket });

  } catch (err) {
    console.error("Error generating ticket:", err);
    res.status(500).json({ error: err.message });
  }
}


async function handleGetTicket(req, res) {}

module.exports = { handleGenerateTicket, handleGetTicket };
