import { z } from "zod";

const createUser = z.object({
    username : z.string().min(3).max(100),
    password : z.string().min(3).max(20)
})
export type createUserInput = z.infer<typeof createUser>

const UserSchema = {
    createUser
}

export default UserSchema;