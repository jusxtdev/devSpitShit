import { Response } from "express";
import { env } from "../env.js";

const storeCookie = (title: string, itemToStore: string, res: Response) => {
  res.cookie(title, itemToStore, {
    httpOnly: true,
    secure: env.NODE_ENV === "production",
    maxAge: 1000 * 60 * 60 * 24 * 7,
    sameSite: "strict",
  });
};

export default storeCookie