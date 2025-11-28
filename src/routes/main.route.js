import { Router } from "express";
import adminRoutes from "./admin.route.js";
import candidateRoutes from "./candidate.route.js";
import testRoutes from "./test.route.js";
import questionRoutes from "./question.route.js";
import authRoutes from "./auth.route.js";

const mainRouter = Router()

mainRouter.use(adminRoutes)
mainRouter.use(candidateRoutes)
mainRouter.use(testRoutes)
mainRouter.use(questionRoutes)
mainRouter.use(authRoutes)

export default mainRouter
