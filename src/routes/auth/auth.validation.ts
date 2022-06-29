import { body } from 'express-validator';

export const signupValidator = [
  body('name').isLength({ min: 6, max: 100 }),
  body('email').isEmail(),
  body('password').isLength({ min: 6, max: 100 }),
];

export const signinValidator = [
  body('email').isEmail(),
  body('password').notEmpty(),
];
