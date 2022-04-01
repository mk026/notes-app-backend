import { Router } from 'express';
import NoteController from './noteController';

const router = Router();

router.get('/notes', NoteController.getAll);
router.post('/notes', NoteController.create);
router.put('/notes', NoteController.update);
router.delete('/notes', NoteController.delete);

export default router;
