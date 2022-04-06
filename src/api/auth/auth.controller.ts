import { Request, Response } from 'express';

class AuthController {
  async signup(req: Request, res: Response) {
    return res.json({ message: 'Signup' });
  }

  async signin(req: Request, res: Response) {
    return res.json({ message: 'Signin' });
  }
}

export default new AuthController();
