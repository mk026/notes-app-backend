import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.json({ message: 'GET Notes' }));
router.post('/', (req, res) => res.json({ message: 'POST Notes' }));
router.put('/', (req, res) => res.json({ message: 'PUT Notes' }));
router.delete('/', (req, res) => res.json({ message: 'DELETE Notes' }));

export default router;
