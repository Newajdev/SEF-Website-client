import { Router } from 'express';
import { authenticate, authorizeRoles } from '../../middleware/authMiddleware.js';
import { addAdmin, listAdminUsers } from './admin.controller.js';

const router = Router();

router.post(
  '/add-admin',
  authenticate,
  authorizeRoles('superadmin', 'admin'),
  addAdmin,
);

router.get('/admins', authenticate, authorizeRoles('superadmin', 'admin'), listAdminUsers);

export default router;

