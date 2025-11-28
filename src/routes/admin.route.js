import { Router } from "express";
import {
    deleteAdmin,
    getAdmin,
    registerAdmin,
    updateAdmin
} from "../controllers/admin/admin.controller.js";

import {
    validateBody,
    validateParams
} from "../middlewares/validate.middleware.js";

import {
    adminIdParamsDto,
    registerAdminDto,

} from "../dto/admin-user.dto.js";

const adminRoutes = Router();

// GET: All admins
adminRoutes.get("/admin/users", getAdmin);

// // POST: Create admin
adminRoutes.post("/admin/users", validateBody(registerAdminDto), registerAdmin);

// // PUT: Update admin
adminRoutes.put("/admin/users/:id", validateBody(registerAdminDto), updateAdmin);

// // DELETE: Remove admin
adminRoutes.delete("/admin/users/:id", deleteAdmin);

export default adminRoutes;
