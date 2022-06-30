import { body } from 'express-validator';

import config from '../../config/config';

const noteTitleMinLength = config.server.validation.note.title.minLength;
const noteTitleMaxLength = config.server.validation.note.title.maxLength;
const noteContentMinLength = config.server.validation.note.content.minLength;
const noteContentMaxLength = config.server.validation.note.content.maxLength;

export const createNoteValidator = [
  body('title').isLength({ min: noteTitleMinLength, max: noteTitleMaxLength }),
  body('content').isLength({
    min: noteContentMinLength,
    max: noteContentMaxLength,
  }),
];

export const updateNoteValidator = [
  body('title')
    .optional()
    .isLength({ min: noteTitleMinLength, max: noteTitleMaxLength }),
  body('content').optional().isLength({
    min: noteContentMinLength,
    max: noteContentMaxLength,
  }),
];
