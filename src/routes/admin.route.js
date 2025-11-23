import { Router } from "express";
import { registerAdmin } from "../controllers/admin/admin.controller.js";
import { validateBody } from "../middlewares/validate.middleware.js";
import { registerAdminDto } from "../dto/admin-user.dto.js";

const adminRoutes = Router();

// adminRoutes.get()
adminRoutes.post('/admin/users', validateBody(registerAdminDto), registerAdmin)

export default adminRoutes;
