import { NextFunction, Request, Response } from 'express';
import { ObjectId } from 'mongoose';

import imageService from './image.service';

class ImageController {
  async getAll(
    req: Request & { user?: { id: ObjectId } },
    res: Response,
    next: NextFunction
  ) {
    try {
      const images = await imageService.getAll(req.user!.id);
      return res.json(images);
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      return res.json({ message: 'Add image' });
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      return res.json({ message: 'Update image info' });
    } catch (error) {
      next(error);
    }
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      return res.json({ message: 'Delete image' });
    } catch (error) {
      next(error);
    }
  }
}

export default new ImageController();
