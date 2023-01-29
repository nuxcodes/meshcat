import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

// Server setup
dotenv.config();
const app = express();
app.use(express.json({ limit: '5mb' }));
app.use(cors());

const startServer = () => {
  const PORT = process.env.PORT || 3001;

  try {
  } catch (error) {
    console.error(error);
  }
};

const cleanUp = () => {};

startServer();

[
  'exit',
  `SIGINT`,
  `SIGUSR1`,
  `SIGUSR2`,
  `SIGTERM`,
  'uncaughtException',
].forEach((eventType) => {
  process.once(eventType, cleanUp);
});
