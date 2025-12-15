import { Router } from 'express';
import { authenticate, authorizeRoles } from '../../middleware/authMiddleware.js';
import {
  createCourseEntry,
  deleteCourseEntry,
  getAllCourses,
  getCourseEntry,
  updateCourseEntry,
} from './courses.controller.js';

const router = Router();

router.get('/', getAllCourses);
router.get('/:id', getCourseEntry);
router.post('/', authenticate, authorizeRoles('superadmin', 'admin'), createCourseEntry);
router.put('/:id', authenticate, authorizeRoles('superadmin', 'admin'), updateCourseEntry);
router.delete('/:id', authenticate, authorizeRoles('superadmin'), deleteCourseEntry);

export default router;

