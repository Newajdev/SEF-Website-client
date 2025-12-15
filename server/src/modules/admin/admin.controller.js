import createError from 'http-errors';
import { createUser, listAdmins } from '../auth/auth.service.js';

export const addAdmin = async (req, res, next) => {
  try {
    const { fullName, email, password, role } = req.body;

    if (!fullName || !email || !password || !role) {
      throw createError(400, 'fullName, email, password and role are required');
    }

    const newUser = await createUser({ fullName, email, password, role }, req.user.role);
    return res.status(201).json({ user: newUser });
  } catch (error) {
    return next(error);
  }
};

export const listAdminUsers = async (_req, res, next) => {
  try {
    const admins = await listAdmins();
    return res.json({ admins });
  } catch (error) {
    return next(error);
  }
};

