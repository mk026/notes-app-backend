import { Request, Response } from 'express';

class NoteController {
  async getAll(req: Request, res: Response) {
    return res.json({ message: 'Get all notes' });
  }
  async create(req: Request, res: Response) {
    return res.json({ message: 'Create new note' });
  }
  async update(req: Request, res: Response) {
    return res.json({ message: 'Update note' });
  }
  async delete(req: Request, res: Response) {
    return res.json({ message: 'Delete note' });
  }
}

export default new NoteController();
