import { Request, Response } from 'express';

import UserService from './user.service';

class UserController {
  async getOne(req: Request, res: Response) {
    const user = await UserService.getOne(req.params.id);
    return res.json(user);
  }

  async update(req: Request, res: Response) {
    const user = await UserService.update(req.body);
    return res.json(user);
  }

  async delete(req: Request, res: Response) {
    const user = await UserService.delete(req.params.id);
    return res.json(user);
  }
}

export default new UserController();
