const { generatePersonaReply } = require("../services/geminiService");

async function chatWithPersona(req, res) {
  try {
    const { persona, message, history } = req.body || {};
    const reply = await generatePersonaReply({ persona, message, history });
    return res.json({ reply });
  } catch (error) {
    const status = error.statusCode || 500;
    console.error("chatWithPersona error:", error.message);
    return res.status(status).json({ error: error.message || "Failed to get response from Gemini." });
  }
}

module.exports = { chatWithPersona };
