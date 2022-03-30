import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import config from './config/config';
import noteRouter from './routes/Note';
import todoRouter from './routes/Todo';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', noteRouter);
app.use('/api', todoRouter);

async function startApp() {
  await mongoose.connect('mongodb://localhost:27017/notesappdb');
  app.listen(config.server.port, () => {
    console.log(`Server listening on port ${config.server.port}`);
  });
}

startApp();
