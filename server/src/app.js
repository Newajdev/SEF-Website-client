import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import authRoutes from './modules/auth/auth.routes.js';
import adminRoutes from './modules/admin/admin.routes.js';
import admissionsRoutes from './modules/admissions/admissions.routes.js';
import contactRoutes from './modules/contact/contact.routes.js';
import seminarsRoutes from './modules/seminars/seminars.routes.js';
import consultancyRoutes from './modules/consultancy/consultancy.routes.js';
import coursesRoutes from './modules/courses/courses.routes.js';
import facilitiesRoutes from './modules/facilities/facilities.routes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(helmet());
app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/admissions', admissionsRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/seminars', seminarsRoutes);
app.use('/api/consultancy', consultancyRoutes);
app.use('/api/courses', coursesRoutes);
app.use('/api/facilities', facilitiesRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;

