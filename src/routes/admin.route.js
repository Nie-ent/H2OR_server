import { Router } from "express";
import { deleteAdmin, getAdmin, registerAdmin, updateAdmin } from "../controllers/admin/admin.controller.js";
import { validateBody, validateParams } from "../middlewares/validate.middleware.js";
import { registerAdminDto } from "../dto/admin-user.dto.js";

const adminRoutes = Router();

adminRoutes.get('/admin/users', getAdmin)
adminRoutes.post('/admin/users', validateBody(registerAdminDto), registerAdmin)
adminRoutes.put('/admin/users/:id', updateAdmin)
adminRoutes.delete('/admin/users/:id', deleteAdmin)

export default adminRoutes;
