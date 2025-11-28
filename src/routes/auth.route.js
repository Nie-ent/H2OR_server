import { Router } from "express";
// import { loginAdmin } from "../controllers/admin.controller.js";
import { register } from "../controllers/auth/auth.controller.js";

const authRoutes = Router();

// POST /auth/login - login admin
authRoutes.post("/login", (req, res) => { });

// POST /auth/register - register admin
authRoutes.post("/register", register);

export default authRoutes;
