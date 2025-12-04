import { Router } from "express";
// import { loginAdmin } from "../controllers/admin.controller.js";
import { login, register, getMe } from "../controllers/auth/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const authRoutes = Router();

// POST /auth/register - register admin
authRoutes.post("/auth/register", register);

// POST /auth/login - login admin
authRoutes.post("/auth/login", login);

// GET /auth/me - get current logged-in user
authRoutes.get("/auth/me", authMiddleware, getMe);


export default authRoutes;
