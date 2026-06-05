import { z } from "zod";

const createComment = z.object({
    content : z.string().max(500)
})
export type createCommentInput = z.infer<typeof createComment>