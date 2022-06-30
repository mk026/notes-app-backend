import { Router } from 'express';

import todoController from './todo.controller';
import authMiddleware from '../../middleware/auth.middleware';
import validationMiddleware from '../../middleware/validation.middleware';
import { createTodoValidator, updateTodoValidator } from './todo.validation';

const router = Router();

router.get('/todos', authMiddleware, todoController.getAll);
router.post(
  '/todos',
  createTodoValidator,
  validationMiddleware,
  authMiddleware,
  todoController.create
);
router.put(
  '/todos',
  updateTodoValidator,
  validationMiddleware,
  authMiddleware,
  todoController.update
);
router.delete('/todos/:id', authMiddleware, todoController.delete);

export default router;
