import { ErrorRequestHandler } from 'express';
import CustomError from '../errors/CustomError';

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
    return;
  }

  // Handle Mongoose validation errors
  if (err.name === 'ValidationError') {
    res.status(400).json({
      status: 'error',
      message: 'Validation Error',
      details: err.message
    });
    return;
  }

  // Handle MongoDB duplicate key errors
  if (err.name === 'MongoServerError' && (err as any).code === 11000) {
    res.status(400).json({
      status: 'error',
      message: 'Duplicate Entry Error',
      details: err.message
    });
    return;
  }

  // Default error
  console.error('Error:', err);
  res.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  });
};

export default errorHandler;