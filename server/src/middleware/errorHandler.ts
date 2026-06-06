import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/appError.js";

export const errorHandler = (
    err : AppError,
    req : Request,
    res : Response,
    next : NextFunction
)  => {
    res.status(err.statusCode || 500).json({
        status : false,
        error : err.message || "Internal Server Error"
    })
}