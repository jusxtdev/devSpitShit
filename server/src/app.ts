import { config } from "dotenv"
import { env } from "./env.js"
import express from "express"
import cookieParser from "cookie-parser"
import router from "./routes/root.router.js"

config()

const PORT = env.PORT

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.use("/api", router)

export {app , PORT}