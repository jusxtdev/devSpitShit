import { Request, Response } from "express";
import { createBlogInput, updateBlogInput } from "../schema/blog.schema.js";
import BlogService from "../services/blog.services.js";
import { AppError } from "../utils/appError.js";

const createBlog = async (req: Request, res: Response) => {
  const data: createBlogInput = req.body;

  const newBlog = await BlogService.addBlog(data);

  res.status(201).json({
    status: true,
    data: newBlog,
  });
};

const getPublicBlogs = async (req: Request, res: Response) => {
  const allBlogs = await BlogService.getPubliceBlogs();
  return res.status(200).json({
    status: true,
    data: allBlogs,
  });
};

const getBlogById = async (req: Request, res: Response) => {
  const blogId = Number(req.params.id);

  if (Number.isNaN(blogId)) {
    throw new AppError("Invalid Blog Id", 422);
  }

  const blog = await BlogService.getBlogById(blogId);

  res.status(200).json({
    status: true,
    data: blog,
  });
};

const updateBlog = async (req: Request, res: Response) => {
  const blogId = Number(req.params.id);
  const data: updateBlogInput = req.body;

  if (Number.isNaN(blogId)) {
    throw new AppError("Invalid Blog Id", 422);
  }

  const updated = await BlogService.updateBlog(blogId, data);

  res.status(200).json({
    status: true,
    data: updated,
  });
};

const deleteBlog = async (req: Request, res: Response) => {
  const blogId = Number(req.params.id);

  if (Number.isNaN(blogId)) {
    throw new AppError("Invalid Blog Id", 422);
  }

  await BlogService.deleteBlog(blogId)

  res.status(204).send()
}

const getAllBlogs = async (req : Request, res: Response) => {
    const allBlogs = await BlogService.getAllBlogs()
    res.status(200).json({
        status : true,
        data : allBlogs
    })
}

const BlogController = { createBlog, getPublicBlogs, getBlogById, updateBlog, deleteBlog, getAllBlogs };

export default BlogController;
