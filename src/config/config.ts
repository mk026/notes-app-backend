const SERVER_PORT = 8080;
const MONGODB_HOST = 'mongodb://localhost:27017/notesappdb';

const config = {
  server: {
    port: SERVER_PORT,
  },
  mongodb: {
    host: MONGODB_HOST,
  },
};

export default config;
