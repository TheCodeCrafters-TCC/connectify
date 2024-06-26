import mongoose from "mongoose";
import { CONNECTION_URI as connectionUri } from "../config/keys.js";

export const connectMongoDb = async () => {
  try {
    await mongoose.connect(connectionUri);
    
    console.log("Database connection successfully");
  } catch (error) {
    console.log(error.message);
  }
};
