import { Router } from 'express';

import userController from './user.controller';
import authMiddleware from '../../middleware/auth.middleware';

const router = Router();

router.put('/users', authMiddleware, userController.update);
router.delete('/users/:id', authMiddleware, userController.delete);

export default router;
