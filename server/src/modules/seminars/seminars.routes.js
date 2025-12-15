import { Router } from 'express';
import { authenticate, authorizeRoles } from '../../middleware/authMiddleware.js';
import {
  changeSeminarStatus,
  getSeminars,
  submitSeminar,
} from './seminars.controller.js';

const router = Router();

router.post('/', submitSeminar);
router.get('/', authenticate, authorizeRoles('superadmin', 'admin', 'moderator'), getSeminars);
router.patch(
  '/:id/status',
  authenticate,
  authorizeRoles('superadmin', 'admin'),
  changeSeminarStatus,
);

export default router;

