import { Response, Request, NextFunction } from "express";
import { UnauthorizedError } from "../errors";
import jwt from "jsonwebtoken";

interface IRequest extends Request {
  user: any;
}

interface IDecode {
  username: any;
  exp: any;
}

export const authCheck = (req: IRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnauthorizedError();
  }
  const token = authHeader.split(" ")[1];
  try {
    const { username, exp } = jwt.decode(token, "Wagyuan") as IDecode;
    req.user = { username, exp };
    next();
  } catch (err: any) {
    throw new UnauthorizedError();
  }
};
