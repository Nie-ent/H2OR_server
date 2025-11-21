import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import compression from 'compression'

import mainRouter from './routes/main.route.js'
import { notFoundMiddleware } from './middlewares/not-found.middleware.js'
import { defaultErrorMiddleware } from './middlewares/errors/default-error.middleware.js'
import { prismaErrorMiddleware } from './middlewares/errors/prisma-error.middleware.js'
import { jwtErrorMiddleware } from './middlewares/errors/jwt-error.middleware.js'
import { zodErrorMiddleware } from './middlewares/errors/zod-error.middleware.js'


const app = express()

app.use(express.json())

//Third Party Middlewares
app.use(helmet())
app.use(compression())
app.use(rateLimit({
    windowMs: 3 * 60 * 1000,
    max: 100
}))
app.use(cors({
    origin: '*',
    method: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))


//router
app.use(mainRouter)

// Not-found error handler
app.use(notFoundMiddleware)

// Middleware error handler 
app.use(prismaErrorMiddleware)
app.use(jwtErrorMiddleware)
app.use(zodErrorMiddleware)

// Default error handler
app.use(defaultErrorMiddleware)

export default app