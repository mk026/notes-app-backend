import { NextFunction, Request, Response } from 'express';

import { AuthRequest } from '../../middleware/auth.middleware';
import authService from './auth.service';

class AuthController {
  async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const msg = await authService.signup(req.body);
      return res.json(msg);
    } catch (error) {
      next(error);
    }
  }

  async signin(req: Request, res: Response, next: NextFunction) {
    try {
      const msg = await authService.signin(req.body);
      return res.json(msg);
    } catch (error) {
      next(error);
    }
  }

  async check(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const msg = await authService.check(req.user!.id);
      return res.json(msg);
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthController();
