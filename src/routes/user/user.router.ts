import { Router } from 'express';

import UserController from './user.controller';
import authMiddleware from '../../middleware/auth';

const router = Router();

router.get('/users', authMiddleware, UserController.getAccountInfo);
router.put('/users', authMiddleware, UserController.update);
router.delete('/users:id', authMiddleware, UserController.delete);

export default router;
