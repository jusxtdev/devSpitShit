import express from "express";
import AuthController from "../controller/authentication.controller.js";
import { validate } from "../middleware/validate.middleware.js";
import UserSchema from "../schema/user.schema.js";

const router = express.Router();

router.post("/signup", validate(UserSchema.createUser), AuthController.signup);

router.post("/login", validate(UserSchema.createUser), AuthController.login);

router.post("/logout", AuthController.logout);

export default router;
