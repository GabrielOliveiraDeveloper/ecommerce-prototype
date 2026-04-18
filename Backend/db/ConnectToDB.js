import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

const ConnectToDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default ConnectToDB;