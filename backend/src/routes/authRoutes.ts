import express, { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import promisePool from '../database';

const router = express.Router();

// Registrierung
router.post('/register', async (req: Request, res: Response) => {
  const { email, password, username } = req.body;

  try {
    // Passwort hashen
    const hashedPassword = await bcrypt.hash(password, 10);

    // Benutzer in der Datenbank speichern
    await promisePool.query(
      'INSERT INTO users (email, password, username) VALUES (?, ?, ?)',
      [email, hashedPassword, username]
    );

    // Erfolgreiche Antwort
    res.status(201).json({
      user: {
        email,
        username,
      },
    });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
