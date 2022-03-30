import express from 'express';
import cors from 'cors';

import config from './config/config';
import noteRouter from './routes/Note';
import todoRouter from './routes/Todo';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', noteRouter);
app.use('/api', todoRouter);

app.listen(config.server.port, () => {
  console.log(`Server listening on port ${config.server.port}`);
});
