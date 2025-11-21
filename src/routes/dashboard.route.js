import { Router } from "express";
import {
    getAllCandidates,
    updateCandidateStatus
} from "../controllers/dashboard.controller.js";

const dashboardRoutes = Router();

// GET /dashboard/candidates - ดูรายชื่อผู้สมัครทั้งหมด + สถานะ
dashboardRoutes.get("/candidates", getAllCandidates);

// PATCH /dashboard/candidates/:id/status - อัปเดตสถานะ (ผ่าน/ไม่ผ่าน)
dashboardRoutes.patch("/candidates/:id/status", updateCandidateStatus);

export default dashboardRoutes;
