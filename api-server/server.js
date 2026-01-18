const express = require("express");
const cors = require("cors");
const itemRoutes = require("./routes/items");
const connectDB = require("./config/db");
const seedItems = require("./utils/seedItems");

const app = express();
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
connectDB();

// Seed items if database is empty
seedItems();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/items", itemRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "API Server is running" });
});

app.listen(PORT, () => {
  console.log(`API Server running on http://localhost:${PORT}`);
});

module.exports = app;
