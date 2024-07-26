import express from 'express';
import { registerUser, loginUser } from '../contollers/authController';

const router = express.Router();

// Route für die Registrierung
router.post('/register', registerUser);

// Route für das Login
router.post('/login', loginUser);

export default router;

