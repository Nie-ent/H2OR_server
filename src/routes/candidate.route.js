import { Router } from "express";


const candidateRoutes = Router();

// POST /candidates - สมัครผู้สมัครใหม่
candidateRoutes.post("/", createCandidate);

// POST /candidates/:id/upload-resume - อัปโหลดเรซูเม่
// candidateRoutes.post("/:id/upload-resume", uploadResume);

// GET /candidates/:id - ดูข้อมูลผู้สมัคร
// candidateRoutes.get("/:id", getCandidateById);

export default candidateRoutes;
