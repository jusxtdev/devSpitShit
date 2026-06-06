import { prisma } from "../config/db.js";
import { Prisma } from "../generated/prisma/client.js";
import { createBlogInput, updateBlogInput } from "../schema/blog.schema.js";
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
  let blogs;
  try {
    blogs = await prisma.blog.findMany();
  } catch (error) {
    console.error(error);
    throw new AppError("Internal Server Error", 500);
  }
  return blogs;
};

const getBlogById = async (id: number) => {
  let blog;
  try {
    blog = await prisma.blog.findUniqueOrThrow({
      where: {
        id: id,
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Record not found
      if (error.code == "P2025") {
        throw new AppError("Blog Not found", 404);
      }
    }

    console.error(error);
    throw new AppError("Internal Server Error", 500);
  }
  return blog;
};

const updateBlog = async (id: number, data: updateBlogInput) => {
  let updated;
  try {
    updated = await prisma.blog.update({
      where: {
        id: id,
      },
      data: {
        title: data.title,
        content: data.content,
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Record not found
      if (error.code == "P2025") {
        throw new AppError("Product Not Found", 404);
      }
    }

    console.error(error);
    throw new AppError("Internal Server Error", 500);
  }
  return updated;
};

const deleteBlog = async (id: number) => {
  try {
    await prisma.blog.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Record not found
      if (error.code == "P2025") {
        throw new AppError("Product Not Found", 404);
      }
    }

    console.error(error);
    throw new AppError("Internal Server Error", 500);
  }
};

const BlogService = {
  addBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};

export default BlogService;
