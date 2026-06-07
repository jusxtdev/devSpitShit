import { Request, Response } from "express";
import { createUserInput } from "../schema/user.schema.js";
import bcrypt from "bcrypt";
import UserService, { newUserData } from "../services/user.service.js";
import generateToken, { jwtPayload } from "../utils/generateToken.js";
import storeCookie from "../utils/storeCookie.js";
import { AppError } from "../utils/appError.js";

const signup = async (req: Request, res: Response) => {
  const data: createUserInput = req.body;

  // hash the password
  const SALT = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(data.password, SALT);

  // create user
  const newUserData: newUserData = {
    username: data.username,
    hashedPass: hashedPass,
  };
  const newUser = await UserService.createUser(newUserData);

  // generate token
  const payload: jwtPayload = {
    userId: newUser.id,
    role: newUser.role!,
  };
  const token = generateToken(payload);

  // store token in cookie
  storeCookie("jwt", token, res);

  res.status(201).json({
    status: true,
    data: newUser,
  });
};

const login = async (req: Request, res: Response) => {
  const data: createUserInput = req.body;

  // check if userexists
  const user = await UserService.findUserByUsername(data.username)
  if (!user){
    throw new AppError("User not found", 404)
  }

  // verify password
  const isValid = await bcrypt.compare(data.password, user.password)
  if (!isValid) {
    throw new AppError("Incorrect Password", 400)
  }

  // generate token
  const payload : jwtPayload = {
    userId : user.id,
    role : user.role!
  }
  const token = generateToken(payload)

  storeCookie("jwt", token, res)

  res.status(200).json({
    status : true,
    msg : "Logged in Successfully" 
  })

};

const logout = async (req: Request, res: Response) => {
  res.clearCookie("jwt");
  res.status(200).json({
    status : true, 
    msg : "Logged out successfully"
  });
};

const AuthController = { signup, login, logout };

export default AuthController;
