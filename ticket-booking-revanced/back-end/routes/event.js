const express = require("express");
const { handleGenerateEvent, handleGetAllEvents } = require("../controllers/event");

const router = express.Router();

router.post("/events", handleGenerateEvent);
router.get("/events", handleGetAllEvents);



module.exports = router;
