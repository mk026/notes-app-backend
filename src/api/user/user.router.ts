import { Router } from 'express';

const router = Router();

router.get('/users', (req, res) => res.json({ message: 'GET users' }));
router.put('/users', (req, res) => res.json({ message: 'PUT users' }));
router.delete('/users', (req, res) => res.json({ message: 'DELETE users' }));

export default router;
