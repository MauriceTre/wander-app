import { Router } from 'express';
import { getProfile, updateDistance } from '../contollers/userController';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

router.get('/profile', authMiddleware, getProfile);
router.post('/distance', authMiddleware, updateDistance);

export default router;
