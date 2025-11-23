import { Router } from "express";
import { resumeApplication } from "../controllers/candidate/candidate.controller.js";


const candidateRoutes = Router();

candidateRoutes.post("/candidates", resumeApplication);


export default candidateRoutes;
