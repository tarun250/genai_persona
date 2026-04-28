const dotenv = require("dotenv");

dotenv.config();

const config = {
  port: process.env.PORT || 5000,
  geminiApiKey: process.env.GEMINI_API_KEY,
  geminiModel: process.env.GEMINI_MODEL || "gemini-1.5-flash"
};

if (!config.geminiApiKey) {
  console.warn("GEMINI_API_KEY is missing. API calls will fail until configured.");
}

module.exports = { config };
