import express, { Request, Response } from "express";

const router = express.Router();

// health route
router.get("/health", (req: Request, res: Response) => {
  res.send("Yepp \n We alive");
});

export default router;
