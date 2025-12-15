import createError from 'http-errors';
import { verifyToken } from '../utils/jwt.js';
import { query } from '../config/database.js';

export const authenticate = async (req, _res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw createError(401, 'Authentication token missing');
    }

    const token = authHeader.split(' ')[1];
    const decoded = verifyToken(token);

    const { rows } = await query('SELECT id, full_name, email, role FROM users WHERE id = $1', [
      decoded.sub,
    ]);

    if (!rows.length) {
      throw createError(401, 'User no longer exists');
    }

    req.user = rows[0];
    return next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
      return next(createError(401, 'Invalid or expired token'));
    }
    return next(error);
  }
};

export const authorizeRoles = (...roles) => (req, _res, next) => {
  if (!req.user || !roles.includes(req.user.role)) {
    return next(createError(403, 'You do not have permission to perform this action'));
  }
  return next();
};

