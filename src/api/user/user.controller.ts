import { Request, Response } from 'express';

import UserService from './user.service';

class UserController {
  async getOne(req: Request, res: Response) {
    const user = await UserService.getOne(req.params.id);
    return res.json(user);
  }

  async update(req: Request, res: Response) {
    return res.json({ message: 'Update user' });
  }

  async delete(req: Request, res: Response) {
    return res.json({ message: 'Delete user' });
  }
}

export default new UserController();
