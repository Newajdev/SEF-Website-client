import createError from 'http-errors';
import { v4 as uuid } from 'uuid';
import { query } from '../../config/database.js';
import { hashPassword, comparePassword } from '../../utils/password.js';

const PUBLIC_USER_FIELDS = 'id, full_name, email, role, created_at';

const ROLE_HIERARCHY = {
  superadmin: ['superadmin', 'admin', 'moderator'],
  admin: ['moderator'],
  moderator: [],
};

const sanitizeUser = (row) => {
  if (!row) return null;
  const { password_hash, ...safe } = row;
  return safe;
};

export const findUserByEmail = async (email) => {
  const { rows } = await query('SELECT * FROM users WHERE email = $1', [email.toLowerCase()]);
  return rows[0];
};

export const findUserById = async (id) => {
  const { rows } = await query(`SELECT ${PUBLIC_USER_FIELDS} FROM users WHERE id = $1`, [id]);
  return rows[0];
};

export const ensureRolePermission = (requestedRole, actorRole) => {
  const allowed = ROLE_HIERARCHY[actorRole] || [];
  if (!allowed.includes(requestedRole)) {
    throw createError(403, `You are not allowed to create users with role ${requestedRole}`);
  }
};

export const createUser = async ({ fullName, email, password, role }, actorRole) => {
  if (!['superadmin', 'admin', 'moderator'].includes(role)) {
    throw createError(400, 'Invalid role provided');
  }

  if (role === 'superadmin' && actorRole !== 'superadmin') {
    throw createError(403, 'Only a superadmin can create another superadmin');
  }

  if (role !== 'superadmin') {
    ensureRolePermission(role, actorRole);
  }

  const existing = await findUserByEmail(email);
  if (existing) {
    throw createError(409, 'User with this email already exists');
  }

  const id = uuid();
  const passwordHash = await hashPassword(password);
  const params = [id, fullName, email.toLowerCase(), passwordHash, role];

  await query(
    'INSERT INTO users (id, full_name, email, password_hash, role) VALUES ($1, $2, $3, $4, $5)',
    params,
  );

  const user = await findUserById(id);
  return user;
};

export const loginUser = async ({ email, password }) => {
  const user = await findUserByEmail(email);
  if (!user) {
    throw createError(401, 'Invalid credentials');
  }

  const isValid = await comparePassword(password, user.password_hash);
  if (!isValid) {
    throw createError(401, 'Invalid credentials');
  }

  return sanitizeUser(user);
};

export const listAdmins = async () => {
  const { rows } = await query(
    `SELECT ${PUBLIC_USER_FIELDS}
     FROM users
     WHERE role IN ('superadmin', 'admin', 'moderator')
     ORDER BY created_at DESC`,
  );
  return rows;
};

