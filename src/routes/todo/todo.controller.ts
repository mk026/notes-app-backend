import { Request, Response } from 'express';
import ITodo from './todo.interface';

import TodoService from './todo.service';

class TodoController {
  async getAll(req: Request, res: Response) {
    try {
      const todos = await TodoService.getAll();
      return res.json(todos);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  async create(req: Request, res: Response) {
    try {
      const todo = await TodoService.create(req.body);
      return res.json(todo);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  async update(req: Request, res: Response) {
    try {
      const todo = await TodoService.update(req.body);
      return res.json(todo);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  async delete(req: Request<{ id: ITodo['_id'] }>, res: Response) {
    try {
      const todo = await TodoService.delete(req.params.id);
      return res.json(todo);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default new TodoController();
