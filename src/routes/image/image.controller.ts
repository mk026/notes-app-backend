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

  async create(
    req: Request & { user?: { id: ObjectId } },
    res: Response,
    next: NextFunction
  ) {
    try {
      const imageUrl = `/static/images/${req.user?.id}/${req.file?.originalname}`;
      const imageData = {
        ...req.body,
        userId: req.user?.id,
        url: imageUrl,
      };
      const image = await imageService.create(imageData);
      return res.json(image);
    } catch (error) {
      next(error);
    }
  }

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      const image = await imageService.update(req.body);
      return res.json(image);
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
