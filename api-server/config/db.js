const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Use the MongoDB connection string from environment variables
    const connectionString =
      process.env.MONGODB_URI ||
      "mongodb+srv://saimum681_db_user:g3SsAPddXXnPtlA8@shophub.kv6owea.mongodb.net/?appName=ShopHub";
    const conn = await mongoose.connect(connectionString, {
      dbName: "ShopHub", // Specify the database name
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
