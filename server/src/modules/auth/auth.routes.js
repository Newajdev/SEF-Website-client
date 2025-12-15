import { Router } from 'express';
import { authenticate } from '../../middleware/authMiddleware.js';
import { optionalAuthenticate } from '../../middleware/optionalAuth.js';
import { getProfile, login, registerAdmin } from './auth.controller.js';

const router = Router();

router.post('/login', login);
router.post('/register-admin', optionalAuthenticate, registerAdmin);
router.get('/me', authenticate, getProfile);

export default router;

