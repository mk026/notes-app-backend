import { body } from 'express-validator';

export const updateUserValidator = [
  body('name').optional().isLength({ min: 6, max: 100 }),
  body('email').optional().isEmail(),
  body('oldPassword').optional().notEmpty(),
  body('newPassword').optional().isLength({ min: 6, max: 100 }),
];
