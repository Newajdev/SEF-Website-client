import createError from 'http-errors';
import { listSeminars, registerSeminar, updateSeminarStatus } from './seminars.service.js';

export const submitSeminar = async (req, res, next) => {
  try {
    const { fullName, email, phone, topic, preferredDate } = req.body;
    if (!fullName || !email || !phone || !topic) {
      throw createError(400, 'fullName, email, phone and topic are required');
    }
    const item = await registerSeminar({ fullName, email, phone, topic, preferredDate });
    return res.status(201).json({ seminar: item });
  } catch (error) {
    return next(error);
  }
};

export const getSeminars = async (_req, res, next) => {
  try {
    const items = await listSeminars();
    return res.json({ seminars: items });
  } catch (error) {
    return next(error);
  }
};

export const changeSeminarStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) {
      throw createError(400, 'status is required');
    }
    const updated = await updateSeminarStatus(id, status);
    return res.json({ seminar: updated });
  } catch (error) {
    return next(error);
  }
};

