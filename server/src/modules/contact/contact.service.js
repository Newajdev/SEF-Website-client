import { v4 as uuid } from 'uuid';
import createError from 'http-errors';
import { query } from '../../config/database.js';

export const createContactMessage = async ({ fullName, email, subject, message }) => {
  const id = uuid();
  await query(
    `INSERT INTO contact_messages (id, full_name, email, subject, message)
     VALUES ($1, $2, $3, $4, $5)`,
    [id, fullName, email, subject, message],
  );
  const { rows } = await query('SELECT * FROM contact_messages WHERE id = $1', [id]);
  return rows[0];
};

export const listContactMessages = async () => {
  const { rows } = await query('SELECT * FROM contact_messages ORDER BY created_at DESC');
  return rows;
};

export const markContactStatus = async (id, status) => {
  const { rows } = await query(
    'UPDATE contact_messages SET status = $2, updated_at = NOW() WHERE id = $1 RETURNING *',
    [id, status],
  );
  if (!rows.length) {
    throw createError(404, 'Message not found');
  }
  return rows[0];
};

