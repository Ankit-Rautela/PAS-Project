const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  const uri = process.env.MONGO_URL;

  if (!uri) {
    console.error("MONGO_URI is not defined in the environment variables.");
    process.exit(1);
  }

  const connectWithRetry = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL);
      console.log("MongoDB connected");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error.message);
      console.log("Retrying connection in 5 seconds...");
      setTimeout(connectWithRetry, 5000); // Retry after 5 seconds
    }
  };

  connectWithRetry();
};

module.exports = connectDB;