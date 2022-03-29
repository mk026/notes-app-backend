import { Request, Response } from 'express';

class TodoController {
  async getAll(req: Request, res: Response) {
    return res.json({ message: 'Get all todos' });
  }
  async create(req: Request, res: Response) {
    return res.json({ message: 'Create new todo' });
  }
  async update(req: Request, res: Response) {
    return res.json({ message: 'Update todo' });
  }
  async delete(req: Request, res: Response) {
    return res.json({ message: 'Delete todo' });
  }
}

export default new TodoController();
