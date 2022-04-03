import { Request, Response } from 'express';

import TodoService from './todo.service';

class TodoController {
  async getAll(req: Request, res: Response) {
    const todos = await TodoService.getAll();
    return res.json(todos);
  }
  async create(req: Request, res: Response) {
    const todo = await TodoService.create(req.body);
    return res.json(todo);
  }
  async update(req: Request, res: Response) {
    return res.json({ message: 'Update todo' });
  }
  async delete(req: Request, res: Response) {
    return res.json({ message: 'Delete todo' });
  }
}

export default new TodoController();
