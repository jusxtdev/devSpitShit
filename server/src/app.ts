import { config } from "dotenv"
import { env } from "./env.js"
import express, {Request, Response} from "express"
import cookieParser from "cookie-parser"
import router from "./routes/root.router.js"
import { AppError } from "./utils/appError.js"
import { errorHandler } from "./middleware/errorHandler.middleware.js"

config()

const PORT = env.PORT

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use("/api", router)

// All route catcher for undefined routees
app.all("/{*splat}", (req: Request, _res: Response) => {
  throw new AppError(`${req.method} ${req.originalUrl} Not found`, 404);
});

// gloabal error handler
app.use(errorHandler);


export {app , PORT}