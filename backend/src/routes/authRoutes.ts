import { Router } from 'express';
import { register, login } from '../contollers/authController';

const router = Router();

router.post('/register', register);
router.post('/login', login);

export default router;
