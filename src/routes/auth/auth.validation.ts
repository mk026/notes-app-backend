import { body } from 'express-validator';

import config from '../../config/config';

const passwordMinLength = config.server.validation.user.password.minLength;
const passwordMaxLength = config.server.validation.user.password.maxLength;
const nameMinLength = config.server.validation.user.name.minLength;
const nameMaxLength = config.server.validation.user.name.maxLength;

export const signupValidator = [
  body('name').isLength({ min: nameMinLength, max: nameMaxLength }),
  body('email').isEmail(),
  body('password').isLength({ min: passwordMinLength, max: passwordMaxLength }),
];

export const signinValidator = [
  body('email').isEmail(),
  body('password').notEmpty(),
];
