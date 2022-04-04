import { Request, Response } from 'express';

class UserController {
  async getOne(req: Request, res: Response) {
    return res.json({ message: 'Get user' });
  }

  async update(req: Request, res: Response) {
    return res.json({ message: 'Update user' });
  }

  async delete(req: Request, res: Response) {
    return res.json({ message: 'Delete user' });
  }
}

export default new UserController();
