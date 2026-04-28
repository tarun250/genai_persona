const express = require("express");
const cors = require("cors");
const { config } = require("./config/env");
const chatRoutes = require("./routes/chatRoutes");

const app = express();

app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.use("/api/chat", chatRoutes);

app.use((err, _req, res, _next) => {
  console.error("Unhandled API error:", err);
  res.status(500).json({ error: "Internal server error. Please try again." });
});

app.listen(config.port, () => {
  console.log(`Backend running on port ${config.port}`);
});
