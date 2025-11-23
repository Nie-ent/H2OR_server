import { Router } from "express";
import { addCandidateAddress, createCandidateDocument, deleteCandidate, getCandidateInfoById, resumeApplication, updateCandidateInfo } from "../controllers/candidate/candidate.controller.js";


const candidateRoutes = Router();

candidateRoutes.post("/candidates", resumeApplication);
candidateRoutes.get("/candidates/:id", getCandidateInfoById);
candidateRoutes.put("/candidates/:id", updateCandidateInfo)
candidateRoutes.delete("/candidates/:id/delete", deleteCandidate)
candidateRoutes.post("/candidates/:id/address", addCandidateAddress)
candidateRoutes.post("/candidates/:id/documents", createCandidateDocument)


export default candidateRoutes;
