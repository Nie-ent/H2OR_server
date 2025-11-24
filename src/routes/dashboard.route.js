import { Router } from "express";
import {
    fileUploadSum,
    getCandidateNum,
    scoreSum,
    statusSum
} from "../controllers/dashboard/dashboard.controller.js";

const dashboardRoutes = Router()

dashboardRoutes.get('/dashboard/overview', getCandidateNum)
dashboardRoutes.get('/dashboard/tests', scoreSum)
dashboardRoutes.get('/dashboard/documents', fileUploadSum)
dashboardRoutes.get('/dashboard/status', statusSum)


export default dashboardRoutes