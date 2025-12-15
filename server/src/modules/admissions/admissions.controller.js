import createError from 'http-errors';
import {
  createAdmission,
  listAdmissions,
  updateAdmissionStatus,
} from './admissions.service.js';

export const submitAdmission = async (req, res, next) => {
  try {
    const { fullName, email, phone, course, notes } = req.body;
    if (!fullName || !email || !phone || !course) {
      throw createError(400, 'fullName, email, phone and course are required');
    }
    const admission = await createAdmission({ fullName, email, phone, course, notes });
    return res.status(201).json({ admission });
  } catch (error) {
    return next(error);
  }
};

export const getAdmissions = async (_req, res, next) => {
  try {
    const items = await listAdmissions();
    return res.json({ admissions: items });
  } catch (error) {
    return next(error);
  }
};

export const changeAdmissionStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) {
      throw createError(400, 'status is required');
    }
    const updated = await updateAdmissionStatus(id, status);
    return res.json({ admission: updated });
  } catch (error) {
    return next(error);
  }
};

