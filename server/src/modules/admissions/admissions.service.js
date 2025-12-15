import { v4 as uuid } from 'uuid';
import createError from 'http-errors';
import { query } from '../../config/database.js';

export const createAdmission = async ({ fullName, email, phone, course, notes }) => {
  const id = uuid();
  await query(
    `INSERT INTO admissions (id, full_name, email, phone, course, notes)
     VALUES ($1, $2, $3, $4, $5, $6)`,
    [id, fullName, email, phone, course, notes],
  );
  const { rows } = await query('SELECT * FROM admissions WHERE id = $1', [id]);
  return rows[0];
};

export const listAdmissions = async () => {
  const { rows } = await query('SELECT * FROM admissions ORDER BY created_at DESC');
  return rows;
};

export const updateAdmissionStatus = async (id, status) => {
  const { rows } = await query(
    'UPDATE admissions SET status = $2, updated_at = NOW() WHERE id = $1 RETURNING *',
    [id, status],
  );
  if (!rows.length) {
    throw createError(404, 'Admission record not found');
  }
  return rows[0];
};

