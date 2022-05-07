import { Router } from 'express';

import AuthController from './auth.controller';
import authMiddleware from '../../middleware/auth';

const router = Router();

router.post('/signup', AuthController.signup);
router.post('/signin', AuthController.signin);
router.get('/check', authMiddleware, AuthController.check);

export default router;
