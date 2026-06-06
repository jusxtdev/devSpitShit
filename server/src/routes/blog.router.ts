import express from "express";
import { validate } from "../middleware/validate.middleware.js";
import BlogSchema from "../schema/blog.schema.js";
import BlogController from "../controller/blog.controller.js";
import authenticate from "../middleware/authenticate.middleware.js";

const router = express.Router();

router.post(
  "/",
  authenticate,
  validate(BlogSchema.createBlog),
  BlogController.createBlog,
);

// only public blogs will be sent
router.get("/", BlogController.getPublicBlogs);

// All blogs (public/private) accessible by ADMIN only
router.get("/all", authenticate, BlogController.getAllBlogs);

router.get("/:id", BlogController.getBlogById);

router.patch("/:id", authenticate, BlogController.updateBlog);

router.delete("/:id", authenticate, BlogController.deleteBlog);

export default router;
