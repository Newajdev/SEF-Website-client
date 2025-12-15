import createError from 'http-errors';
import {
  createConsultancyRequest,
  listConsultancyRequests,
  updateConsultancyStatus,
} from './consultancy.service.js';

export const submitConsultancy = async (req, res, next) => {
  try {
    const { fullName, email, phone, company, topic, message } = req.body;
    if (!fullName || !email || !phone || !topic) {
      throw createError(400, 'fullName, email, phone and topic are required');
    }
    const item = await createConsultancyRequest({ fullName, email, phone, company, topic, message });
    return res.status(201).json({ consultancy: item });
  } catch (error) {
    return next(error);
  }
};

export const getConsultancyRequests = async (_req, res, next) => {
  try {
    const items = await listConsultancyRequests();
    return res.json({ consultancy: items });
  } catch (error) {
    return next(error);
  }
};

export const changeConsultancyStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) {
      throw createError(400, 'status is required');
    }
    const updated = await updateConsultancyStatus(id, status);
    return res.json({ consultancy: updated });
  } catch (error) {
    return next(error);
  }
};

