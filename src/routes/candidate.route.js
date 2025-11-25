import { Router } from "express";

import {
    resumeApplication,
    getCandidateInfoById,
    updateCandidateInfo,
    deleteCandidate,

    // Address
    addCandidateAddress,
    updateCandidateAddress,
    deleteCandidateAddress,

    // Document
    createCandidateDocument,
    deleteCandidateDocument,
    getCandidateDoc,

    // Status
    getCandidateStatus,
    updateCadidateStatus,
    requestUpdateCandidateStatus,
    rejectCandidateStatus,
    approveCandidateStatus,
} from "../controllers/candidate/candidate.controller.js";

import upload from "../middlewares/upload.middleware.js";

const candidateRoutes = Router();

// Candidate
candidateRoutes.post("/candidates", resumeApplication);
candidateRoutes.get("/candidates/:candidateId", getCandidateInfoById);
candidateRoutes.put("/candidates/:candidateId", updateCandidateInfo);
candidateRoutes.delete("/candidates/:candidateId", deleteCandidate);

// Address
candidateRoutes.post("/candidates/:candidateId/addresses", addCandidateAddress);
candidateRoutes.put("/addresses/:addressId", updateCandidateAddress);
candidateRoutes.delete("/addresses/:addressId", deleteCandidateAddress);

// Document
candidateRoutes.post("/candidates/:candidateId/documents", upload.single('pdf'), createCandidateDocument);
candidateRoutes.get("/candidates/:candidateId/documents", getCandidateDoc);
candidateRoutes.delete("/documents/:documentId", deleteCandidateDocument);

// Status
candidateRoutes.get("/candidates/:candidateId/status", getCandidateStatus);
candidateRoutes.post("/candidates/:candidateId/status", updateCadidateStatus);
candidateRoutes.post('/status-update-request', requestUpdateCandidateStatus)
candidateRoutes.patch('/status-update-request/:id/approve', approveCandidateStatus)
candidateRoutes.patch('/status-update-request/:id/reject', rejectCandidateStatus)


export default candidateRoutes;
