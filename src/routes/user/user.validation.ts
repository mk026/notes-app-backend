import { body } from 'express-validator';

import config from '../../config/config';

const nameMinLength = config.server.validation.user.name.minLength;
const nameMaxLength = config.server.validation.user.name.maxLength;
const passwordMinLength = config.server.validation.user.password.minLength;
const passwordMaxLength = config.server.validation.user.password.maxLength;

export const updateUserValidator = [
  body('name').optional().isLength({ min: nameMinLength, max: nameMaxLength }),
  body('email').optional().isEmail(),
  body('oldPassword').optional().notEmpty(),
  body('newPassword')
    .optional()
    .isLength({ min: passwordMinLength, max: passwordMaxLength }),
];
