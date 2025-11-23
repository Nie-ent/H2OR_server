import { Router } from "express";
import adminRoutes from "./admin.route.js";
import candidateRoutes from "./candidate.route.js";

const mainRouter = Router()

mainRouter.use(adminRoutes)
mainRouter.use(candidateRoutes)

export default mainRouter
