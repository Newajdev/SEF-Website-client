import { Router } from 'express';
import { authenticate, authorizeRoles } from '../../middleware/authMiddleware.js';
import {
  changeAdmissionStatus,
  getAdmissions,
  submitAdmission,
} from './admissions.controller.js';

const router = Router();

router.post('/', submitAdmission);
router.get('/', authenticate, authorizeRoles('superadmin', 'admin', 'moderator'), getAdmissions);
router.patch(
  '/:id/status',
  authenticate,
  authorizeRoles('superadmin', 'admin'),
  changeAdmissionStatus,
);

export default router;

