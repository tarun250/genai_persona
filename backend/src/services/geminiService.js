const { GoogleGenerativeAI } = require("@google/generative-ai");
const { config } = require("../config/env");
const { PERSONA_PROMPTS, resolvePersona } = require("../prompts/personaPrompts");

const genAI = new GoogleGenerativeAI(config.geminiApiKey || "");

function sanitizeHistory(history) {
  if (!Array.isArray(history)) {
    return [];
  }

  return history
    .filter((item) => item && (item.role === "user" || item.role === "assistant") && typeof item.content === "string")
    .slice(-20)
    .map((item) => ({
      role: item.role === "assistant" ? "model" : "user",
      parts: [{ text: item.content.trim().slice(0, 3000) }]
    }));
}

async function generatePersonaReply({ persona, message, history }) {
  const personaKey = resolvePersona(persona);

  if (!personaKey) {
    const error = new Error("Unsupported persona selected.");
    error.statusCode = 400;
    throw error;
  }

  if (!config.geminiApiKey) {
    const error = new Error("Server Gemini configuration is missing.");
    error.statusCode = 500;
    throw error;
  }

  const userMessage = String(message || "").trim();
  if (!userMessage) {
    const error = new Error("Message cannot be empty.");
    error.statusCode = 400;
    throw error;
  }

  const model = genAI.getGenerativeModel({
    model: config.geminiModel,
    systemInstruction: PERSONA_PROMPTS[personaKey]
  });

  const chat = model.startChat({ history: sanitizeHistory(history) });
  const result = await chat.sendMessage(userMessage);
  const reply = result?.response?.text?.()?.trim();

  if (!reply) {
    const error = new Error("Gemini returned an empty response.");
    error.statusCode = 502;
    throw error;
  }

  return reply;
}

module.exports = { generatePersonaReply };
