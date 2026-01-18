const express = require("express");
const cors = require("cors");
const itemRoutes = require("./routes/items");
const connectDB = require("./config/db");
const seedItems = require("./utils/seedItems");

const app = express();

// Note: DB connection is handled in each controller function
// for serverless compatibility

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
  res.json({ status: "OK", message: "API Server is running" });
});

// Export the handler for Vercel
module.exports = app;

// Only listen on a port if running directly (not on Vercel)
if (require.main === module) {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`API Server running on port ${PORT}`);
  });
}
