import { v4 as uuid } from 'uuid';
import createError from 'http-errors';
import { query } from '../../config/database.js';

const slugify = (text) =>
  text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const fetchCourse = async (id) => {
  const { rows } = await query('SELECT * FROM courses WHERE id = $1', [id]);
  return rows[0];
};

export const createCourse = async ({
  title,
  shortDescription,
  description,
  duration,
  fee,
  isActive = true,
}) => {
  const id = uuid();
  let slug = slugify(title);
  if (!slug) {
    slug = `course-${id.slice(0, 6)}`;
  }

  const existing = await query('SELECT id FROM courses WHERE slug = $1', [slug]);
  if (existing.rows.length) {
    slug = `${slug}-${Date.now()}`;
  }

  await query(
    `INSERT INTO courses (id, title, slug, short_description, description, duration, fee, is_active)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
    [id, title, slug, shortDescription, description, duration, fee, isActive],
  );

  return fetchCourse(id);
};

export const listCourses = async () => {
  const { rows } = await query('SELECT * FROM courses ORDER BY created_at DESC');
  return rows;
};

export const getCourse = async (id) => {
  const course = await fetchCourse(id);
  if (!course) {
    throw createError(404, 'Course not found');
  }
  return course;
};

export const updateCourse = async (id, payload) => {
  const existing = await fetchCourse(id);
  if (!existing) {
    throw createError(404, 'Course not found');
  }

  const nextValues = {
    title: payload.title ?? existing.title,
    short_description: payload.shortDescription ?? existing.short_description,
    description: payload.description ?? existing.description,
    duration: payload.duration ?? existing.duration,
    fee: payload.fee ?? existing.fee,
    is_active: payload.isActive ?? existing.is_active,
  };

  let slug = existing.slug;
  if (payload.title && payload.title !== existing.title) {
    slug = slugify(payload.title);
    const { rows } = await query('SELECT id FROM courses WHERE slug = $1 AND id <> $2', [slug, id]);
    if (rows.length) {
      slug = `${slug}-${Date.now()}`;
    }
  }

  await query(
    `UPDATE courses
     SET title = $2,
         slug = $3,
         short_description = $4,
         description = $5,
         duration = $6,
         fee = $7,
         is_active = $8,
         updated_at = NOW()
     WHERE id = $1`,
    [id, nextValues.title, slug, nextValues.short_description, nextValues.description, nextValues.duration, nextValues.fee, nextValues.is_active],
  );

  return fetchCourse(id);
};

export const deleteCourse = async (id) => {
  const { rowCount } = await query('DELETE FROM courses WHERE id = $1', [id]);
  if (!rowCount) {
    throw createError(404, 'Course not found');
  }
};

