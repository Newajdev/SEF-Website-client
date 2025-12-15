import createError from 'http-errors';
import {
  createContactMessage,
  listContactMessages,
  markContactStatus,
} from './contact.service.js';

export const submitContactMessage = async (req, res, next) => {
  try {
    const { fullName, email, subject, message } = req.body;
    if (!fullName || !email || !subject || !message) {
      throw createError(400, 'fullName, email, subject and message are required');
    }
    const item = await createContactMessage({ fullName, email, subject, message });
    return res.status(201).json({ message: item });
  } catch (error) {
    return next(error);
  }
};

export const getContactMessages = async (_req, res, next) => {
  try {
    const items = await listContactMessages();
    return res.json({ messages: items });
  } catch (error) {
    return next(error);
  }
};

export const updateContactStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) {
      throw createError(400, 'status is required');
    }
    const updated = await markContactStatus(id, status);
    return res.json({ message: updated });
  } catch (error) {
    return next(error);
  }
};

