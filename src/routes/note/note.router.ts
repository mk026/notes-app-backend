import { Router } from 'express';

import NoteController from './note.controller';
import authMiddleware from '../../middleware/auth.middleware';
import validationMiddleware from '../../middleware/validation.middleware';
import { createNoteValidator, updateNoteValidator } from './note.validation';

const router = Router();

router.get('/notes', authMiddleware, NoteController.getAll);
router.post(
  '/notes',
  authMiddleware,
  createNoteValidator,
  validationMiddleware,
  NoteController.create
);
router.put(
  '/notes',
  authMiddleware,
  updateNoteValidator,
  validationMiddleware,
  NoteController.update
);
router.delete('/notes/:id', authMiddleware, NoteController.delete);

export default router;
