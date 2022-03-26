import express from 'express';
import config from './config/config';

const app = express();

app.listen(config.server.port, () => {
  console.log(`Server listening on port ${config.server.port}`);
});
