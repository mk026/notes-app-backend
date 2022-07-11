import { Router } from 'express';

import imageController from './image.controller';
import authMiddleware from '../../middleware/auth.middleware';
import upload from '../../middleware/upload.middleware';
import { createImageValidator, updateImageValidator } from './image.validation';
import validationMiddleware from '../../middleware/validation.middleware';

const router = Router();

router.get('/images', authMiddleware, imageController.getAll);

router.post(
  '/images',
  upload.single('image'),
  createImageValidator,
  validationMiddleware,
  authMiddleware,
  imageController.create
);

router.put(
  '/images',
  updateImageValidator,
  validationMiddleware,
  authMiddleware,
  imageController.update
);

router.delete('/images/:id', authMiddleware, imageController.delete);

export default router;
