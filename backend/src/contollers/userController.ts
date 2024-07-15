import { Request, Response } from 'express';
import User from '../models/User';

const getProfile = async (req: Request, res: Response) => {
  const { userId } = req.body;
  try {
    const user = await User.findByPk(userId);
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch profile', error });
  }
};

const updateDistance = async (req: Request, res: Response) => {
  const { userId, distance } = req.body;
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.totalDistance += distance;
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update distance', error });
  }
};

export { getProfile, updateDistance };
