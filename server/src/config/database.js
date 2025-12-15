import pg from 'pg';
import env from './env.js';

const { Pool } = pg;

const pool = new Pool({
  connectionString: env.databaseUrl,
  ssl: { rejectUnauthorized: false },
});

pool.on('error', (err) => {
  console.error('Unexpected database error', err);
  process.exit(1);
});

export const query = (text, params) => pool.query(text, params);

export default pool;

