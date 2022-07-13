import { NextFunction, Request, Response } from 'express';

import { AuthRequest } from '../../middleware/auth.middleware';
import todoService from './todo.service';

class TodoController {
  async getAll(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const todos = await todoService.getAll(req.user!.id);
      return res.json(todos);
    } catch (error) {
      next(error);
    }
  }

  async create(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const todoData = { ...req.body, userId: req.user?.id };
      const todo = await todoService.create(todoData);
      return res.json(todo);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const todo = await todoService.update(req.body);
      return res.json(todo);
    } catch (error) {
      next(error);
    }
  }

  async delete(
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const todo = await todoService.delete(req.params.id);
      return res.json(todo);
    } catch (error) {
      next(error);
    }
  }
}

export default new TodoController();
