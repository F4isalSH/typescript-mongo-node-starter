import { StatusCodes } from "http-status-codes";
import { CustomError } from "./custom.error";
export class BadRequest extends CustomError {
  constructor() {
    super("Bad Request, try again.", StatusCodes.BAD_REQUEST);
  }
}
