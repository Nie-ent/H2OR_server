import { Router } from "express";
// import { loginAdmin } from "../controllers/admin.controller.js";
import { login, register } from "../controllers/auth/auth.controller.js";

const authRoutes = Router();

// POST /auth/register - register admin
authRoutes.post("/register", register);

// POST /auth/login - login admin
authRoutes.post("/login", login);


export default authRoutes;
