import { NextFunction, Request, Response } from 'express';

import ApiError from '../exceptions/ApiError';

export default function errorMiddleware(
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof ApiError) {
    return res.status(error.status).json(error.message);
  }
  return res.status(500).json((error as Error).message);
}
