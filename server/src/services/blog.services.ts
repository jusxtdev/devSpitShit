import { prisma } from "../config/db.js";
import { Prisma } from "../generated/prisma/client.js";
import { createBlogInput } from "../schema/blog.schema.js";
import { AppError } from "../utils/appError.js";

const addBlog = async (data: createBlogInput) => {
  let newBlog;
  try {
    newBlog = await prisma.blog.create({
      data: data,
      select: {
        id: true,
        title: true,
        createdAt: true,
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Record already exists
      if (error.code == "P2002") {
        throw new AppError("Product already exists", 409);
      }
    }

    console.error(error);
    throw new AppError("Internal Server Error", 500);
  }
  return newBlog;
};

const getBlogs = async () => {
  let blogs 
  try {
    blogs = await prisma.blog.findMany()
  } catch (error) {
    console.error(error);
    throw new AppError("Internal Server Error", 500);
  }
  return blogs
}

const getBlogById = async(id : number) => {
  let blog 
  try {
    blog = await prisma.blog.findUniqueOrThrow({
      where : {
        id : id
      }
    })
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Record not found
      if (error.code == "P2025") {
        throw new AppError("Blog Not found", 404)
      }
    }

    console.error(error);
    throw new AppError("Internal Server Error", 500);
  }
  return blog
}

const BlogService = {
  addBlog, getBlogs, getBlogById
};

export default BlogService;
