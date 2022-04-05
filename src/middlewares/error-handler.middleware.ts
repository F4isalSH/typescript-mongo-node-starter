import { CustomError } from "../errors/custom.error";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send("An error has occurred, please try again.");
};
