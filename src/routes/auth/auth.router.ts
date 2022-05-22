import { Router } from 'express';

import authController from './auth.controller';
import authMiddleware from '../../middleware/auth.middleware';

const router = Router();

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);
router.get('/check', authMiddleware, authController.check);

export default router;
