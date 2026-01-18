const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Use the MongoDB connection string provided
    const conn = await mongoose.connect(
      "mongodb+srv://saimum681_db_user:g3SsAPddXXnPtlA8@shophub.kv6owea.mongodb.net/?appName=ShopHub",
      {
        dbName: "ShopHub", // Specify the database name
      }
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
