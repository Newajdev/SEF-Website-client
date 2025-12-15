import createError from 'http-errors';
import env from '../../config/env.js';
import { signToken } from '../../utils/jwt.js';
import { createUser, listAdmins, loginUser } from './auth.service.js';

const buildAuthResponse = (user) => ({
  token: signToken({ sub: user.id, role: user.role }),
  user,
});

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw createError(400, 'Email and password are required');
    }

    const user = await loginUser({ email, password });
    return res.json(buildAuthResponse(user));
  } catch (error) {
    return next(error);
  }
};

export const registerAdmin = async (req, res, next) => {
  try {
    const { fullName, email, password, role } = req.body;

    if (!fullName || !email || !password || !role) {
      throw createError(400, 'fullName, email, password and role are required');
    }

    let actorRole = req.user?.role;

    if (!actorRole) {
      const providedKey = req.headers['x-admin-registration-key'];
      if (!providedKey || providedKey !== env.adminRegistrationKey) {
        throw createError(401, 'Valid admin token or registration key is required');
      }
      actorRole = 'superadmin';
    }

    const user = await createUser({ fullName, email, password, role }, actorRole);
    return res.status(201).json({ user });
  } catch (error) {
    return next(error);
  }
};

export const getProfile = async (req, res, next) => {
  try {
    if (!req.user) {
      throw createError(401, 'Not authenticated');
    }
    return res.json({ user: req.user });
  } catch (error) {
    return next(error);
  }
};

export const getAdmins = async (_req, res, next) => {
  try {
    const admins = await listAdmins();
    return res.json({ admins });
  } catch (error) {
    return next(error);
  }
};

