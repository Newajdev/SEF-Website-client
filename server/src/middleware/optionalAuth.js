import { verifyToken } from '../utils/jwt.js';
import { query } from '../config/database.js';

export const optionalAuthenticate = async (req, _res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header || !header.startsWith('Bearer ')) {
      return next();
    }

    const decoded = verifyToken(header.split(' ')[1]);
    const { rows } = await query('SELECT id, full_name, email, role FROM users WHERE id = $1', [
      decoded.sub,
    ]);

    if (rows.length) {
      req.user = rows[0];
    }
    return next();
  } catch (error) {
    return next();
  }
};

