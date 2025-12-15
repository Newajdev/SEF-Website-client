/* eslint-disable no-unused-vars */
export const notFound = (_req, _res, next) => {
  const error = new Error('Route not found');
  error.status = 404;
  next(error);
};

export const errorHandler = (err, _req, res, _next) => {
  const statusCode = err.status || 500;
  const payload = {
    status: 'error',
    message: err.message || 'Something went wrong',
  };

  if (process.env.NODE_ENV !== 'production' && err.stack) {
    payload.stack = err.stack;
  }

  res.status(statusCode).json(payload);
};

