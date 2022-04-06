import { Request, Response } from 'express';

import AuthService from './auth.service';

class AuthController {
  async signup(req: Request, res: Response) {
    const msg = await AuthService.signup();
    return res.json(msg);
  }

  async signin(req: Request, res: Response) {
    const msg = await AuthService.signin();
    return res.json(msg);
  }
}

export default new AuthController();
