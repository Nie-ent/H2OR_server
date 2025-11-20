import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import mainRouter from './routes/main.route.js'


const app = express()

//Third Party Middlewares
app.use(helmet())
app.use(rateLimit({
    windowMs: 3 * 60 * 1000,
    max: 100
}))
app.use(cors({
    origin: '*',
    method: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

app.use(express.json())

//router
app.use(mainRouter)


//error handler

export default app