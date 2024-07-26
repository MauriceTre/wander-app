import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Registrierung eines neuen Benutzers
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    // Überprüfen, ob die E-Mail bereits verwendet wird
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    // Passwort hashen
    const hashedPassword = await bcrypt.hash(password, 10);

    // Neuen Benutzer erstellen
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    // JWT-Token generieren
    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET || 'mysecret', {
      expiresIn: '1h',
    });

    // Erfolgreiche Antwort zurückgeben
    res.status(201).json({
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      },
      token,
    });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Benutzeranmeldung
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Benutzer anhand der E-Mail-Adresse finden
    const user = await prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Passwort überprüfen
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // JWT-Token generieren
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'mysecret', {
      expiresIn: '1h',
    });

    // Erfolgreiche Antwort zurückgeben
    res.status(200).json({
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
