import { Router } from 'express';

const router = Router();

router.post('/signup', (req, res) => res.json({ message: 'Signup' }));
router.post('/signin', (req, res) => res.json({ message: 'Signin' }));

export default router;
