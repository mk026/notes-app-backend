import { Router } from 'express';

import authMiddleware from '../../middleware/auth.middleware';

const router = Router();

router.get('/images', authMiddleware, (req, res) =>
  res.json({ message: 'All images' })
);

router.post('/images', authMiddleware, (req, res) =>
  res.json({ message: 'Add image' })
);

router.put('/images', authMiddleware, (req, res) =>
  res.json({ message: 'Update image info' })
);

router.delete('/images/:id', authMiddleware, (req, res) =>
  res.json({ message: 'Delete image' })
);

export default router;
