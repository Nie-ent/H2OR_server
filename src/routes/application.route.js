import { Router } from "express";

const applicationRoutes = Router();

// /api/applications
applicationRoutes.post('/', (req, res) => { /* applicationController.createApplication */ res.send('Create new application'); });
applicationRoutes.patch('/:applicationId/advance', (req, res) => { /* applicationController.advanceApplication */ res.send('Advance application to next stage'); });
applicationRoutes.patch('/:applicationId/status', (req, res) => { /* applicationController.updateStatus */ res.send('Update application status'); });
applicationRoutes.get('/:applicationId/progress', (req, res) => { /* applicationController.getProgress */ res.send('Get application progress'); });

export default applicationRoutes