import env from './config/env.js';
import app from './app.js';

const server = app.listen(env.port, () => {
  console.log(`API server ready on port ${env.port}`);
});

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Server closed');
  });
});

