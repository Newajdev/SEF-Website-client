import { v4 as uuid } from 'uuid';
import createError from 'http-errors';
import { query } from '../../config/database.js';

export const createFacility = async ({ title, description, imageUrl }) => {
  const id = uuid();
  await query(
    `INSERT INTO facilities (id, title, description, image_url)
     VALUES ($1, $2, $3, $4)`,
    [id, title, description, imageUrl],
  );
  const { rows } = await query('SELECT * FROM facilities WHERE id = $1', [id]);
  return rows[0];
};

export const listFacilities = async () => {
  const { rows } = await query('SELECT * FROM facilities ORDER BY created_at DESC');
  return rows;
};

export const updateFacility = async (id, payload) => {
  const { rows } = await query('SELECT * FROM facilities WHERE id = $1', [id]);
  if (!rows.length) {
    throw createError(404, 'Facility not found');
  }
  const existing = rows[0];
  const next = {
    title: payload.title ?? existing.title,
    description: payload.description ?? existing.description,
    image_url: payload.imageUrl ?? existing.image_url,
  };
  const response = await query(
    `UPDATE facilities
     SET title = $2,
         description = $3,
         image_url = $4,
         updated_at = NOW()
     WHERE id = $1
     RETURNING *`,
    [id, next.title, next.description, next.image_url],
  );
  return response.rows[0];
};

export const deleteFacility = async (id) => {
  const { rowCount } = await query('DELETE FROM facilities WHERE id = $1', [id]);
  if (!rowCount) {
    throw createError(404, 'Facility not found');
  }
};

