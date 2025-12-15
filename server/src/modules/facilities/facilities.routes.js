import { Router } from 'express';
import { authenticate, authorizeRoles } from '../../middleware/authMiddleware.js';
import {
  createFacilityEntry,
  deleteFacilityEntry,
  getFacilities,
  updateFacilityEntry,
} from './facilities.controller.js';

const router = Router();

router.get('/', getFacilities);
router.post('/', authenticate, authorizeRoles('superadmin', 'admin'), createFacilityEntry);
router.put('/:id', authenticate, authorizeRoles('superadmin', 'admin'), updateFacilityEntry);
router.delete('/:id', authenticate, authorizeRoles('superadmin'), deleteFacilityEntry);

export default router;

