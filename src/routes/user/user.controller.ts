import { NextFunction, Request, Response } from 'express';

import IUser from './user.interface';
import userService from './user.service';

class UserController {
  async getOne(
    req: Request<{ id: IUser['_id'] }>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const user = await userService.getOne(req.params.id);
      return res.json(user);
    } catch (error) {
      next(error);
    }
  }

  async update(
    req: Request & { user?: { id: IUser['_id'] } },
    res: Response,
    next: NextFunction
  ) {
    try {
      const user = await userService.update(req.user!.id, req.body);
      return res.json(user);
    } catch (error) {
      next(error);
    }
  }

  async delete(
    req: Request<{ id: IUser['_id'] }>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const user = await userService.delete(req.params.id);
      return res.json(user);
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();
