import { Router } from "express";
import {
    addCandidateAddress,
    createCandidateDocument,
    deleteCandidate,
    deleteCandidateAddress,
    deleteCandidateDocument,
    getCandidateDoc,
    getCandidateInfoById,
    getCandidateStatus,
    resumeApplication,
    updateCadidateStatus,
    updateCandidateAddress,
    updateCandidateInfo
} from "../controllers/candidate/candidate.controller.js";

const candidateRoutes = Router();

// Candidates
candidateRoutes.post("/candidates", resumeApplication);
candidateRoutes.get("/candidates/:id", getCandidateInfoById);
candidateRoutes.put("/candidates/:id", updateCandidateInfo);
candidateRoutes.delete("/candidates/:id", deleteCandidate);

// Addresses
candidateRoutes.post("/candidates/:id/address", addCandidateAddress);
candidateRoutes.put("/addresses/:id", updateCandidateAddress);
candidateRoutes.delete("/addresses/:id", deleteCandidateAddress);

// Documents
candidateRoutes.post("/candidates/:id/documents", createCandidateDocument);
candidateRoutes.delete("/documents/:document_id", deleteCandidateDocument);
candidateRoutes.get("/candidates/:id/documents", getCandidateDoc);
candidateRoutes.get("/candidates/:id/status", getCandidateStatus);
candidateRoutes.post("/candidates/:id/status", updateCadidateStatus);

export default candidateRoutes;
