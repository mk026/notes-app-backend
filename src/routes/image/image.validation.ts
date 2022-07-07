import { body } from 'express-validator';

import config from '../../config/config';

const imageTitleMinLength = config.server.validation.image.title.minLength;
const imageTitleMaxLength = config.server.validation.image.title.maxLength;
const imageDescriptionMinLength =
  config.server.validation.image.description.minLength;
const imageDescriptionMaxLength =
  config.server.validation.image.description.maxLength;

export const createImageValidator = [
  body('title').isLength({
    min: imageTitleMinLength,
    max: imageTitleMaxLength,
  }),
  body('description').isLength({
    min: imageDescriptionMinLength,
    max: imageDescriptionMaxLength,
  }),
];

export const updateImageValidator = [
  body('title')
    .optional()
    .isLength({ min: imageTitleMinLength, max: imageTitleMaxLength }),
  body('description').optional().isLength({
    min: imageDescriptionMinLength,
    max: imageDescriptionMaxLength,
  }),
];
