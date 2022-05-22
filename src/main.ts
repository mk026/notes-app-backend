import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import config from './config/config';
import noteRouter from './routes/note/note.router';
import todoRouter from './routes/todo/todo.router';
import userRouter from './routes/user/user.router';
import authRouter from './routes/auth/auth.router';
import errorMiddleware from './middleware/error';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', noteRouter);
app.use('/api', todoRouter);
app.use('/api', userRouter);
app.use('/api', authRouter);

app.use(errorMiddleware);

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
