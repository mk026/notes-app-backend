import { Request, Response } from 'express';

import AuthService from './auth.service';

class AuthController {
  async signup(req: Request, res: Response) {
    try {
      const msg = await AuthService.signup(req.body);
      return res.json(msg);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async signin(req: Request, res: Response) {
    try {
      const msg = await AuthService.signin(req.body);
      return res.json(msg);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default new AuthController();
