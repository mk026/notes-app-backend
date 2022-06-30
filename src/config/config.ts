import dotenv from 'dotenv';

dotenv.config();

const SERVER_PORT = +process.env.SERVER_PORT!;

const MONGODB_HOST = process.env.MONGODB_HOST!;

const TOKEN_SECRET = process.env.TOKEN_SECRET!;
const TOKEN_EXPIRESIN = process.env.TOKEN_EXPIRESIN!;

const TODO_TITLE_MIN_LENGTH = 1;
const TODO_TITLE_MAX_LENGTH = 100;

const NOTE_TITLE_MIN_LENGTH = 1;
const NOTE_TITLE_MAX_LENGTH = 100;
const NOTE_CONTENT_MIN_LENGTH = 1;
const NOTE_CONTENT_MAX_LENGTH = 1000;

const USER_NAME_MIN_LENGTH = 1;
const USER_NAME_MAX_LENGTH = 100;
const USER_PASSWORD_MIN_LENGTH = 6;
const USER_PASSWORD_MAX_LENGTH = 100;

const config = {
  server: {
    port: SERVER_PORT,
    token: {
      secret: TOKEN_SECRET,
      expiresIn: TOKEN_EXPIRESIN,
    },
    validation: {
      todo: {
        title: {
          minLength: TODO_TITLE_MIN_LENGTH,
          maxLength: TODO_TITLE_MAX_LENGTH,
        },
      },
      note: {
        title: {
          minLength: NOTE_TITLE_MIN_LENGTH,
          maxLength: NOTE_TITLE_MAX_LENGTH,
        },
        content: {
          minLength: NOTE_CONTENT_MIN_LENGTH,
          maxLength: NOTE_CONTENT_MAX_LENGTH,
        },
      },
      user: {
        name: {
          minLength: USER_NAME_MIN_LENGTH,
          maxLength: USER_NAME_MAX_LENGTH,
        },
        password: {
          minLength: USER_PASSWORD_MIN_LENGTH,
          maxLength: USER_PASSWORD_MAX_LENGTH,
        },
      },
    },
  },
  mongodb: {
    host: MONGODB_HOST,
  },
};

export default config;
