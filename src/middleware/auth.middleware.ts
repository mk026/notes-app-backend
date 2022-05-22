import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

import config from '../config/config';

export default function authMiddleware<T>(
  req: Request<T> & { user?: string | JwtPayload },
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(403).json({ message: 'Unauthorized' });
    }
    const secret = config.server.token.secret;
    const decodedData = jwt.verify(token, secret);
    req.user = decodedData;
    next();
  } catch (error) {
    return res.status(403).json({ message: 'Unauthorized' });
  }
}
