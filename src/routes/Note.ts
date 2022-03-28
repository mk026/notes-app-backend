import { Router } from 'express';

const router = Router();

router.get('/notes', (req, res) => res.json({ message: 'GET Notes' }));
router.post('/notes', (req, res) => res.json({ message: 'POST Notes' }));
router.put('/notes', (req, res) => res.json({ message: 'PUT Notes' }));
router.delete('/notes', (req, res) => res.json({ message: 'DELETE Notes' }));

export default router;
