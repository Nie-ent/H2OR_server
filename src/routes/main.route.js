import { Router } from "express";
import adminRoutes from "./admin.route.js";

const mainRouter = Router()

mainRouter.use(adminRoutes)

export default mainRouter
