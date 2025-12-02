import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(cors({
    origin: process.env.BASE_URL || 'http://localhost:5173',
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ['Set-Cookie', '*']
}))
app.use(express.json({limit: "50kb"}))
app.use(cookieParser())
app.use(express.static("public"))
app.use(express.urlencoded(
    {
        extended: true,
        limit: "50kb"
    }
))


// router impots

import authRoute from "./routes/auth.routes.js"

app.use("/api/v1/auth", authRoute)



export default app;
