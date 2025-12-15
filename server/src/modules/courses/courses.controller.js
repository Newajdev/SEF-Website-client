import createError from 'http-errors';
import {
  createCourse,
  deleteCourse,
  getCourse,
  listCourses,
  updateCourse,
} from './courses.service.js';

export const getAllCourses = async (_req, res, next) => {
  try {
    const courses = await listCourses();
    return res.json({ courses });
  } catch (error) {
    return next(error);
  }
};

export const createCourseEntry = async (req, res, next) => {
  try {
    const { title, shortDescription, description, duration, fee, isActive } = req.body;
    if (!title) {
      throw createError(400, 'title is required');
    }
    const course = await createCourse({
      title,
      shortDescription,
      description,
      duration,
      fee,
      isActive,
    });
    return res.status(201).json({ course });
  } catch (error) {
    return next(error);
  }
};

export const updateCourseEntry = async (req, res, next) => {
  try {
    const { id } = req.params;
    const course = await updateCourse(id, req.body);
    return res.json({ course });
  } catch (error) {
    return next(error);
  }
};

export const deleteCourseEntry = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteCourse(id);
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
};

export const getCourseEntry = async (req, res, next) => {
  try {
    const { id } = req.params;
    const course = await getCourse(id);
    return res.json({ course });
  } catch (error) {
    return next(error);
  }
};

