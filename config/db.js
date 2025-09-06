// Correct way to use the environment variable
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); // <-- This line must use process.env.MONGO_URI
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
