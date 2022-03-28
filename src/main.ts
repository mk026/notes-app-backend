import express from 'express';
import config from './config/config';
import noteRouter from './routes/Note';

const app = express();

app.use('/api', noteRouter);

app.listen(config.server.port, () => {
  console.log(`Server listening on port ${config.server.port}`);
});
