const express = require("express");
const { chatWithPersona } = require("../controllers/chatController");

const router = express.Router();

router.post("/", chatWithPersona);

module.exports = router;
