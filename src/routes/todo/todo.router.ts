import { Router } from 'express';

import TodoController from './todo.controller';
import authMiddleware from '../../middleware/auth';

const router = Router();

router.get('/todos', authMiddleware, TodoController.getAll);
router.post('/todos', authMiddleware, TodoController.create);
router.put('/todos', authMiddleware, TodoController.update);
router.delete('/todos/:id', authMiddleware, TodoController.delete);

export default router;
