import { Request, Response, NextFunction } from "express";
import { jwtPayload } from "../utils/generateToken.js";
import jwt from "jsonwebtoken";
import { env } from "../env.js";
import { AppError } from "../utils/appError.js";
import UserService from "../services/user.service.js";

const authenticate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // extract jwt from header / cookie
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies?.jwt) {
    token = req.cookies.jwt;
  }

  // decode jwt
  let decoded: jwtPayload;
  try {
    decoded = jwt.verify(token, env.JWT_SECRET) as jwtPayload;
  } catch (error) {
    throw new AppError("Invalid or Expired Token", 401);
  }

  // check if user exists
  const user = await UserService.findUserById(decoded.userId);
  if (!user) {
    throw new AppError("User Not Found", 404);
  }

  // store user info in req
  req.user = {
    userId: decoded.userId,
    role: decoded.role,
  };

  next();
};

export default authenticate;
