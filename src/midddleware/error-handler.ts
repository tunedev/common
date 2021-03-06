import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors';

export const errorHandler = (
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return response
      .status(err.statusCode)
      .json({ errors: err.serializeErrors() });
  }

  console.error(err);
  return response
    .status(500)
    .json({ errors: [{ message: 'something broke' }] });
};
