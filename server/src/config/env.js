import dotenv from 'dotenv';

dotenv.config();

const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT) || 5001,
  databaseUrl: process.env.DATABASE_URL || process.env.CONNECTION_STR,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '1d',
  adminRegistrationKey: process.env.ADMIN_REGISTRATION_KEY,
};

if (!env.databaseUrl) {
  throw new Error('DATABASE_URL or CONNECTION_STR is required');
}

if (!env.jwtSecret) {
  throw new Error('JWT_SECRET is required');
}

export default env;

