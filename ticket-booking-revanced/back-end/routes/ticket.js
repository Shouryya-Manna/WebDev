const express = require("express");

const router = express.Router();

const { handleGenerateTicket, handleGetTicket } = require("../controllers/ticket");

router.post("/ticket",handleGenerateTicket);
router.get("/ticket",handleGetTicket );

module.exports = router;