import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongoose';

import config from '../config/config';

export interface AuthPayload {
  id: ObjectId;
}

export default function generateToken(payload: AuthPayload) {
  const secret = config.server.token.secret;
  const expiresIn = config.server.token.expiresIn;
  return jwt.sign(payload, secret, { expiresIn });
}
