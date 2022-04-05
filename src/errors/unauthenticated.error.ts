import { StatusCodes } from "http-status-codes";
import { CustomError } from "./index";
export class UnauthorizedError extends CustomError {
  constructor() {
    super("Unauthorized error, try again", StatusCodes.UNAUTHORIZED);
  }
}
