import express from "express";
import { validate } from "../middleware/validate.middleware.js";
import BlogSchema from "../schema/blog.schema.js";
import BlogController from "../controller/blog.controller.js";

const router = express.Router();

router.post("/", validate(BlogSchema.createBlog), BlogController.createBlog)

// only public blogs will be sent
router.get("/", BlogController.getPublicBlogs)

// All blogs (public/private) accessible by ADMIN only
router.get("/all", BlogController.getAllBlogs)

router.get("/:id", BlogController.getBlogById)
 
router.patch("/:id", BlogController.updateBlog)

router.delete("/:id", BlogController.deleteBlog)


export default router;
