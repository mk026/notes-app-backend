import { body } from 'express-validator';

export const createTodoValidator = [
  body('title').isLength({ min: 1, max: 100 }),
];

export const updateTodoValidator = [
  body('title').optional().isLength({ min: 1, max: 100 }),
  body('completed').optional().isBoolean(),
];
