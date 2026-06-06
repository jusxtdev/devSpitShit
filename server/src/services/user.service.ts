import { prisma } from "../config/db.js";
import { Prisma } from "../generated/prisma/client.js";
import { createUserInput } from "../schema/user.schema.js";
import { AppError } from "../utils/appError.js";

export type newUserData = {
  username: string;
  hashedPass: string;
};

const createUser = async (data: newUserData) => {
  let newUser;
  try {
    newUser = await prisma.user.create({
      data: {
        username: data.username,
        password: data.hashedPass,
      },
      select: {
        id: true,
        username: true,
        createdAt: true,
        role: true,
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Record already exists
      if (error.code == "P2002") {
        throw new AppError("User already exists", 409);
      }
    }

    console.error(error);
    throw new AppError("Internal Server Error", 500);
  }
  return newUser;
};

const findUserByUsername = async (username: string) => {
  let user;
  try {
    user = await prisma.user.findUniqueOrThrow({
      where: {
        username: username,
      },
      select: {
        id: true,
        username: true,
        role: true,
        createdAt: true,
        password : true
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Record not found
      if (error.code == "P2025") {
        return null;
      }
    }
    console.error(error);
    throw new AppError("Internal Server Error", 500);
  }
  return user
};

const UserService = {
  createUser,
  findUserByUsername
};

export default UserService;
