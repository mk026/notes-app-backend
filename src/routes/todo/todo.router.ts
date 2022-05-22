import { Router } from 'express';

import todoController from './todo.controller';
import authMiddleware from '../../middleware/auth.middleware';

const router = Router();

router.get('/todos', authMiddleware, todoController.getAll);
router.post('/todos', authMiddleware, todoController.create);
router.put('/todos', authMiddleware, todoController.update);
router.delete('/todos/:id', authMiddleware, todoController.delete);

export default router;
