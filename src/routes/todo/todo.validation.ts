import { body } from 'express-validator';

import config from '../../config/config';

const todoTitleMinLength = config.server.validation.todo.title.minLength;
const todoTitleMaxLength = config.server.validation.todo.title.maxLength;

export const createTodoValidator = [
  body('title').isLength({ min: todoTitleMinLength, max: todoTitleMaxLength }),
];

export const updateTodoValidator = [
  body('title')
    .optional()
    .isLength({ min: todoTitleMinLength, max: todoTitleMaxLength }),
  body('completed').optional().isBoolean(),
];
