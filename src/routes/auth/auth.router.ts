import { Router } from 'express';

import authController from './auth.controller';
import authMiddleware from '../../middleware/auth.middleware';
import validationMiddleware from '../../middleware/validation.middleware';
import { signinValidator, signupValidator } from './auth.validation';

const router = Router();

router.post(
  '/signup',
  signupValidator,
  validationMiddleware,
  authController.signup
);
router.post(
  '/signin',
  signinValidator,
  validationMiddleware,
  authController.signin
);
router.get('/check', authMiddleware, authController.check);

export default router;
