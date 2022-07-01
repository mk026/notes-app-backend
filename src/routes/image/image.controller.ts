import { NextFunction, Request, Response } from 'express';

class ImageController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      return res.json({ message: 'All images' });
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
