import { Router } from "express";
import { getCandidateInfoById, resumeApplication } from "../controllers/candidate/candidate.controller.js";


const candidateRoutes = Router();

candidateRoutes.post("/candidates", resumeApplication);
candidateRoutes.get("/candidates/:id", getCandidateInfoById);


export default candidateRoutes;
