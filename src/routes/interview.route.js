import { Router } from "express";

// server/routes/interview.route.js
const interviewRoutes = Router();

// /api/interviews
interviewRoutes.post('/:candidateId/session', (req, res) => { /* interviewController.createSession */ res.send('Create interview session'); });
interviewRoutes.post('/:candidateId/upload', (req, res) => { /* interviewController.uploadVideo */ res.send('Upload interview video'); });
interviewRoutes.get('/:candidateId', (req, res) => { /* interviewController.getInterviewDetails */ res.send('Get interview details for candidate'); });
interviewRoutes.post('/:videoId/transcript', (req, res) => { /* interviewController.generateTranscript */ res.send('Generate transcript from video'); });

export default interviewRoutes