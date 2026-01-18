const express = require("express");
const cors = require("cors");
const itemRoutes = require("./routes/items");
const connectDB = require("./config/db");
const seedItems = require("./utils/seedItems");

const app = express();

// Connect to MongoDB
connectDB();

// Seed items if database is empty
seedItems();

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "*",
  })
);
app.use(express.json());

// Routes
app.use("/api/items", itemRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "API Server is running",
    timestamp: new Date().toISOString(),
  });
});

// Export the handler for Vercel
module.exports = app;
