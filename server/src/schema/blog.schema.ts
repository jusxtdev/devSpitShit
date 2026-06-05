import {z} from "zod"

const createBlog = z.object({
    title : z.string(),
    content : z.string()
})
export type createBlogInput = z.infer<typeof createBlog>

const updateBlog = createBlog.partial()
export type updateBlogInput = z.infer<typeof updateBlog>

const BlogSchema = {
    createBlog, updateBlog
}

export default BlogSchema