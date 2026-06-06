import { Request, Response } from "express";
import { createBlogInput } from "../schema/blog.schema.js";
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

const getBlogs = async (req: Request, res: Response) => {
  const allBlogs = await BlogService.getBlogs();
  return res.status(200).json({
    status: true,
    data: allBlogs,
  });
};

const getBlogById = async (req: Request, res: Response) => {
    const blogId = Number(req.params.id)
    
    if (Number.isNaN(blogId)){
        throw new AppError("Invalid Blog Id", 422)
    }

    const blog = await BlogService.getBlogById(blogId)

    res.status(200).json({
        status : true,
        data : blog
    })
} 

const BlogController = { createBlog, getBlogs, getBlogById };

export default BlogController;
