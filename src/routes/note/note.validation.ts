import { body } from 'express-validator';

export const createNoteValidator = [
  body('title').isLength({ min: 1, max: 100 }),
  body('content').isLength({ min: 1, max: 100 }),
];

export const updateNoteValidator = [
  body('title').optional().isLength({ min: 1, max: 100 }),
  body('content').optional().isLength({ min: 1, max: 100 }),
];
