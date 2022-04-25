import { Request, Response } from 'express';

import IUser from '../user/user.interface';
import INote from './note.interface';
import NoteService from './note.service';

class NoteController {
  async getAll(req: Request, res: Response) {
    try {
      const notes = await NoteService.getAll();
      return res.json(notes);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async create(req: Request & { user?: { id: IUser['_id'] } }, res: Response) {
    try {
      const noteData = { ...req.body, userId: req.user?.id };
      const note = await NoteService.create(noteData);
      return res.json(note);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const note = await NoteService.update(req.body);
      return res.json(note);
    } catch (error) {
      return res.status(500).json(error);
    }
  }

  async delete(req: Request<{ id: INote['_id'] }>, res: Response) {
    try {
      const note = await NoteService.delete(req.params.id);
      return res.json(note);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default new NoteController();
