import { Router } from 'express';

import UserController from './user.controller';

const router = Router();

router.get('/users', UserController.getOne);
router.put('/users', UserController.update);
router.delete('/users:id', UserController.delete);

export default router;
