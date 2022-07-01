import { Router } from 'express';

import imageController from './image.controller';
import authMiddleware from '../../middleware/auth.middleware';

const router = Router();

router.get('/images', authMiddleware, imageController.getAll);

router.post('/images', authMiddleware, imageController.create);

router.put('/images', authMiddleware, imageController.update);

router.delete('/images/:id', authMiddleware, imageController.delete);

export default router;
