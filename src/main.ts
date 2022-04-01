import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import config from './config/config';
import noteRouter from './api/note/noteRouter';
import todoRouter from './api/todo/todoRouter';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', noteRouter);
app.use('/api', todoRouter);

async function startApp() {
  try {
    await mongoose.connect(config.mongodb.host);
    app.listen(config.server.port, () => {
      console.log(`Server listening on port ${config.server.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

startApp();
