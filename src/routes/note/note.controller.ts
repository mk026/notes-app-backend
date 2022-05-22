import { NextFunction, Request, Response } from 'express';

import IUser from '../user/user.interface';
import INote from './note.interface';
import noteService from './note.service';

class NoteController {
  async getAll(
    req: Request & { user?: { id: IUser['_id'] } },
    res: Response,
    next: NextFunction
  ) {
    try {
      const notes = await noteService.getAll(req.user!.id);
      return res.json(notes);
    } catch (error) {
      next(error);
    }
  }

  async create(
    req: Request & { user?: { id: IUser['_id'] } },
    res: Response,
    next: NextFunction
  ) {
    try {
      const noteData = { ...req.body, userId: req.user?.id };
      const note = await noteService.create(noteData);
      return res.json(note);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const note = await noteService.update(req.body);
      return res.json(note);
    } catch (error) {
      next(error);
    }
  }

  async delete(
    req: Request<{ id: INote['_id'] }>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const note = await noteService.delete(req.params.id);
      return res.json(note);
    } catch (error) {
      next(error);
    }
  }
}

export default new NoteController();
