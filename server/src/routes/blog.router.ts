import express from "express";
import { validate } from "../middleware/validate.middleware.js";
import BlogSchema from "../schema/blog.schema.js";
import BlogController from "../controller/blog.controller.js";

const router = express.Router();

router.post("/", validate(BlogSchema.createBlog), BlogController.createBlog)

router.get("/", BlogController.getBlogs)

router.get("/:id", BlogController.getBlogById)

export default router;
