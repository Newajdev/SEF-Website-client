import { v4 as uuid } from 'uuid';
import createError from 'http-errors';
import { query } from '../../config/database.js';

export const registerSeminar = async ({ fullName, email, phone, topic, preferredDate }) => {
  const id = uuid();
  await query(
    `INSERT INTO seminar_registrations (id, full_name, email, phone, topic, preferred_date)
     VALUES ($1, $2, $3, $4, $5, $6)`,
    [id, fullName, email, phone, topic, preferredDate],
  );
  const { rows } = await query('SELECT * FROM seminar_registrations WHERE id = $1', [id]);
  return rows[0];
};

export const listSeminars = async () => {
  const { rows } = await query('SELECT * FROM seminar_registrations ORDER BY created_at DESC');
  return rows;
};

export const updateSeminarStatus = async (id, status) => {
  const { rows } = await query(
    'UPDATE seminar_registrations SET status = $2, updated_at = NOW() WHERE id = $1 RETURNING *',
    [id, status],
  );
  if (!rows.length) {
    throw createError(404, 'Seminar registration not found');
  }
  return rows[0];
};

