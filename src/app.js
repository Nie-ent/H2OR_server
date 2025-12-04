import express from 'express'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import compression from 'compression'
import cors from 'cors'

import mainRouter from './routes/main.route.js'
import authRoute from './routes/auth.route.js'
import testRoutes from './routes/test.route.js'

import { defaultErrorMiddleware } from './middlewares/errors/default-error.middleware.js'
import { prismaErrorMiddleware } from './middlewares/errors/prisma-error.middleware.js'
import { jwtErrorMiddleware } from './middlewares/errors/jwt-error.middleware.js'
import { zodErrorMiddleware } from './middlewares/errors/zod-error.middleware.js'
import { notFoundMiddleware } from './middlewares/not-found.middleware.js'

const app = express()

app.use(express.json())

// Third Party Middlewares
app.use(helmet())
app.use(compression())
app.use(rateLimit({
    windowMs: 3 * 60 * 1000,
    max: 100
}))
app.use(cors({
    origin: '*',
    method: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true
}))

// --- Routes ---
app.use('/api', mainRouter)

// Not found handler (404)
app.use(notFoundMiddleware)

// Error middlewares
app.use(zodErrorMiddleware)
app.use(jwtErrorMiddleware)
app.use(prismaErrorMiddleware)


// Default error
app.use(defaultErrorMiddleware)

export default app
