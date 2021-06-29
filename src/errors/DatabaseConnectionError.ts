import { CustomError } from './CustomError';

// Just to have a second erro class, this seem like an over kill as it would work like the default Error class
export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = 'Error requesting to database';

  constructor() {
    super('Error requesting to database');

    // Cus it extends Error
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
