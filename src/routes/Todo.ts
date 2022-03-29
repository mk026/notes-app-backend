import { Router } from 'express';

const router = Router();

router.get('/todos', (req, res) => res.json({ message: 'GET todo' }));
router.post('/todos', (req, res) => res.json({ message: 'POST todo' }));
router.put('/todos', (req, res) => res.json({ message: 'PUT todo' }));
router.delete('/todos', (req, res) => res.json({ message: 'DELETE todo' }));

export default router;
