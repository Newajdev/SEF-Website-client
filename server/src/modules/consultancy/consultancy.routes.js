import { Router } from 'express';
import { authenticate, authorizeRoles } from '../../middleware/authMiddleware.js';
import {
  changeConsultancyStatus,
  getConsultancyRequests,
  submitConsultancy,
} from './consultancy.controller.js';

const router = Router();

router.post('/', submitConsultancy);
router.get('/', authenticate, authorizeRoles('superadmin', 'admin', 'moderator'), getConsultancyRequests);
router.patch(
  '/:id/status',
  authenticate,
  authorizeRoles('superadmin', 'admin'),
  changeConsultancyStatus,
);

export default router;

