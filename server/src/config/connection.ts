import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://dbUser:hellomister123@cluster0.pf0vp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

export default mongoose.connection;
