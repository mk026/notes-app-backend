import { Request, Response } from 'express';

import UserService from './user.service';

class UserController {
  async getOne(req: Request, res: Response) {
    try {
      const user = await UserService.getOne(req.params.id);
      return res.json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const user = await UserService.update(req.body);
      return res.json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const user = await UserService.delete(req.params.id);
      return res.json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default new UserController();