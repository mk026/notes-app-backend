import dotenv from 'dotenv';

dotenv.config();

const SERVER_PORT = +process.env.SERVER_PORT!;
const MONGODB_HOST = process.env.MONGODB_HOST!;
const TOKEN_SECRET = process.env.TOKEN_SECRET!;
const TOKEN_EXPIRESIN = process.env.TOKEN_EXPIRESIN!;

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
