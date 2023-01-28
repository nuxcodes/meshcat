import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./mongodb/connect.js";
import MapItem from "./mongodb/models/MapItem.js";

// Server setup
dotenv.config();
const app = express();
app.use(express.json({ limit: "5mb" }));
app.use(cors());

const startServer = () => {
  const PORT = process.env.PORT || 3001;

  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    }); s
  } catch (error) {
    console.error(error);
  }

  const map1 = new MapItem({ name: "First Map using 3D Scan", description: "Just another map", likes: 0 })
  // map1.save().then(result => {
  //   console.log('map saved!');
  // }

}

const cleanUp = () => {
  mongoose.connection.close(() => {
    console.info('DB closed');
    process.exit(0)
  });
};

startServer();

['exit', `SIGINT`, `SIGUSR1`, `SIGUSR2`, `SIGTERM`, 'uncaughtException'].forEach((eventType) => {
  process.once(eventType, cleanUp);
})

