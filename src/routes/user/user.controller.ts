import { Request, Response } from 'express';
import IUser from './user.interface';

import UserService from './user.service';

class UserController {
  async getOne(req: Request<{ id: IUser['_id'] }>, res: Response) {
    try {
      const user = await UserService.getOne(req.params.id);
      return res.json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async getAccountInfo(
    req: Request & { user?: { id: IUser['_id'] } },
    res: Response
  ) {
    try {
      const userInfo = await UserService.getAccountInfo(req.user!.id);
      return res.json(userInfo);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }

  async update(req: Request & { user?: { id: IUser['_id'] } }, res: Response) {
    try {
      const user = await UserService.update(req.user!.id, req.body);
      return res.json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async delete(req: Request<{ id: IUser['_id'] }>, res: Response) {
    try {
      const user = await UserService.delete(req.params.id);
      return res.json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default new UserController();
