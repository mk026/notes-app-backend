import { Router } from 'express';

import NoteController from './note.controller';
import authMiddleware from '../../middleware/auth';

const router = Router();

router.get('/notes', authMiddleware, NoteController.getAll);
router.post('/notes', authMiddleware, NoteController.create);
router.put('/notes', authMiddleware, NoteController.update);
router.delete('/notes/:id', authMiddleware, NoteController.delete);

export default router;
