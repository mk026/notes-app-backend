import jwt from 'jsonwebtoken';

import config from '../config/config';

export default function generateToken(payload: string | object) {
  const secret = config.server.token.secret;
  const expiresIn = config.server.token.expiresIn;
  return jwt.sign(payload, secret, { expiresIn });
}
