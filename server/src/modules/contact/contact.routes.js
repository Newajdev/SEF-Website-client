import { Router } from 'express';
import { authenticate, authorizeRoles } from '../../middleware/authMiddleware.js';
import {
  getContactMessages,
  submitContactMessage,
  updateContactStatus,
} from './contact.controller.js';

const router = Router();

router.post('/', submitContactMessage);
router.get('/', authenticate, authorizeRoles('superadmin', 'admin', 'moderator'), getContactMessages);
router.patch(
  '/:id/status',
  authenticate,
  authorizeRoles('superadmin', 'admin'),
  updateContactStatus,
);

export default router;

