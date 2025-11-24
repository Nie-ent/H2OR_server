import { Router } from "express";
import adminRoutes from "./admin.route.js";
import candidateRoutes from "./candidate.route.js";
import testRoutes from "./test.route.js";
import questionRotues from "./question.route.js";

const mainRouter = Router()

mainRouter.use(adminRoutes)
mainRouter.use(candidateRoutes)
mainRouter.use(testRoutes)
mainRouter.use(questionRotues)

export default mainRouter
