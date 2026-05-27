import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import subscriberRoute from "./routes/subscriberRoute.js";
import chatRoute from "./routes/chatRoute.js";
import voiceRoute from "./routes/voiceRoute.js";

const app = express();

const PORT = process.env.PORT || 4000;

const URI = process.env.MongoDBURI;



app.use(cors());

app.use(express.json());


// ROUTES
app.use("/api", subscriberRoute);

app.use("/api", chatRoute);

app.use("/api", voiceRoute);



const connectDB = async () => {

  try {

    await mongoose.connect(process.env.MONGODB_URI);

    console.log(" MongoDB Connected");

  } catch (error) {

    console.log(
      " DB Error:",
      error.message
    );

  }

};

connectDB();


// SERVER
app.listen(PORT, () => {

  console.log(
    ` Server running on port ${PORT}`
  );

});