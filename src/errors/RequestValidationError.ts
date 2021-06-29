import { ValidationError } from 'express-validator';
import { CustomError } from './CustomError';

// Something like this would have been a viable solution, but we are using abstract class, so we can capture all custom error in our error handler
// interface CustomError {
//   statusCode: number;
//   serializeErrors(): {
//     message: string;
//     field?: string;
//   }[];
// }

// export class RequestValidationError extends Error implements CustomError

export class RequestValidationError extends CustomError {
  statusCode = 400;
  constructor(public errors: ValidationError[]) {
    super('invalid request body');

    // only because this class extends a default class in this case = Error
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((error) => ({
      message: error.msg,
      field: error.param,
    }));
  }
}
