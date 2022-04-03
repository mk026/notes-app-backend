import { Request, Response } from 'express';

import NoteService from './note.service';

class NoteController {
  async getAll(req: Request, res: Response) {
    const notes = await NoteService.getAll();
    return res.json(notes);
  }
  async create(req: Request, res: Response) {
    const note = await NoteService.create(req.body);
    return res.json(note);
  }
  async update(req: Request, res: Response) {
    const note = await NoteService.update(req.body);
    return res.json(note);
  }
  async delete(req: Request, res: Response) {
    return res.json({ message: 'Delete note' });
  }
}

export default new NoteController();
