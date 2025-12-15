import { v4 as uuid } from 'uuid';
import createError from 'http-errors';
import { query } from '../../config/database.js';

export const createConsultancyRequest = async ({
  fullName,
  email,
  phone,
  company,
  topic,
  message,
}) => {
  const id = uuid();
  await query(
    `INSERT INTO consultancy_requests (id, full_name, email, phone, company, topic, message)
     VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    [id, fullName, email, phone, company, topic, message],
  );
  const { rows } = await query('SELECT * FROM consultancy_requests WHERE id = $1', [id]);
  return rows[0];
};

export const listConsultancyRequests = async () => {
  const { rows } = await query('SELECT * FROM consultancy_requests ORDER BY created_at DESC');
  return rows;
};

export const updateConsultancyStatus = async (id, status) => {
  const { rows } = await query(
    'UPDATE consultancy_requests SET status = $2, updated_at = NOW() WHERE id = $1 RETURNING *',
    [id, status],
  );
  if (!rows.length) {
    throw createError(404, 'Consultancy request not found');
  }
  return rows[0];
};

