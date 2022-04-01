import { Router } from 'express';
import TodoController from './todoController';

const router = Router();

router.get('/todos', TodoController.getAll);
router.post('/todos', TodoController.create);
router.put('/todos', TodoController.update);
router.delete('/todos', TodoController.delete);

export default router;
