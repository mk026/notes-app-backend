import { Request, Response } from 'express';

import NoteService from './note.service';

class NoteController {
  async getAll(req: Request, res: Response) {
    const notes = await NoteService.getAll();
    return res.json(notes);
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
