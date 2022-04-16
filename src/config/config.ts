const SERVER_PORT = 8080;
const MONGODB_HOST = 'mongodb://localhost:27017/notesappdb';
const TOKEN_SECRET = 'secret';
const TOKEN_EXPIRESIN = '24h';

const config = {
  server: {
    port: SERVER_PORT,
    token: {
      secret: TOKEN_SECRET,
      expiresIn: TOKEN_EXPIRESIN,
    },
  },
  mongodb: {
    host: MONGODB_HOST,
  },
};

export default config;
