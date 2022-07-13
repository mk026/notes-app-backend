import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import config from '../config/config';
import { AuthPayload } from '../utils/generateToken';

export interface AuthRequest extends Request {
  user?: AuthPayload;
}

export default function authMiddleware<T>(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    const secret = config.server.token.secret;
    const decodedData = jwt.verify(token, secret) as AuthPayload;
    req.user = decodedData;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Unauthorized' });
  }
}
