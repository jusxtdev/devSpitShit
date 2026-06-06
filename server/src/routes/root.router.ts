import express, { Request, Response } from "express";
import blogRouter from "./blog.router.js"
import authRouter from "./authentication.router.js"

const router = express.Router();

// health route
router.get("/health", (req: Request, res: Response) => {
  res.send("Yepp \n We alive");
});

router.use("/blogs", blogRouter)
router.use("/auth", authRouter)

export default router;
