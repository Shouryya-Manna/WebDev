const express = require("express");

const router = express.Router();

const { handleGenerateTicket, handleGetAllTicket } = require("../controllers/ticket");

router.post("/ticket",handleGenerateTicket);
router.get("/ticket",handleGetAllTicket );

module.exports = router;