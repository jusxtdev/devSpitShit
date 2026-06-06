import jwt from "jsonwebtoken";
import { Role } from "../generated/prisma/enums.js";
import { env } from "../env.js";

export type jwtPayload = {
  userId: number;
  role: Role;
};

const generateToken = (payload: jwtPayload) => {
  const token = jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN,
  });
  return token;
};

export default generateToken
