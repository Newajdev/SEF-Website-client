import createError from 'http-errors';
import {
  createFacility,
  deleteFacility,
  listFacilities,
  updateFacility,
} from './facilities.service.js';

export const getFacilities = async (_req, res, next) => {
  try {
    const facilities = await listFacilities();
    return res.json({ facilities });
  } catch (error) {
    return next(error);
  }
};

export const createFacilityEntry = async (req, res, next) => {
  try {
    const { title, description, imageUrl } = req.body;
    if (!title) {
      throw createError(400, 'title is required');
    }
    const facility = await createFacility({ title, description, imageUrl });
    return res.status(201).json({ facility });
  } catch (error) {
    return next(error);
  }
};

export const updateFacilityEntry = async (req, res, next) => {
  try {
    const { id } = req.params;
    const facility = await updateFacility(id, req.body);
    return res.json({ facility });
  } catch (error) {
    return next(error);
  }
};

export const deleteFacilityEntry = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteFacility(id);
    return res.status(204).send();
  } catch (error) {
    return next(error);
  }
};

