import { Request, Response, NextFunction } from "express"
import { Role } from "../generated/prisma/enums.js"
import { AppError } from "../utils/appError.js"

const authorize = (roles : string[]) => {
    return async (req :Request, res : Response, next: NextFunction) => {
        const userRole = req.user?.role
        for (let role of roles) {
            if(userRole.valueOf() === role){
                return next()
            }
        }
        throw new AppError("Forbidden", 403)
    }

}

export default authorize;