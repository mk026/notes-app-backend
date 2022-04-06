import { Router } from 'express';
import TodoController from './todo.controller';

const router = Router();

router.get('/todos', TodoController.getAll);
router.post('/todos', TodoController.create);
router.put('/todos', TodoController.update);
router.delete('/todos/:id', TodoController.delete);

export default router;
