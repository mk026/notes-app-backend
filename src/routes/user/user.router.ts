import { Router } from 'express';

import userController from './user.controller';
import authMiddleware from '../../middleware/auth.middleware';
import validationMiddleware from '../../middleware/validation.middleware';
import { updateUserValidator } from './user.validation';

const router = Router();

router.put(
  '/users',
  updateUserValidator,
  validationMiddleware,
  authMiddleware,
  userController.update
);
router.delete('/users/:id', authMiddleware, userController.delete);

export default router;
