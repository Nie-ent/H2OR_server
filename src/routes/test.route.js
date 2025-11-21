import { Router } from "express";

const testRoutes = Router();

// /api/tests
testRoutes.get('/positions/:positionId', (req, res) => { /* testController.getTestsByPosition */ res.send('Get tests by position'); });
testRoutes.post('/:candidateId/start', (req, res) => { /* testController.startTest */ res.send('Start new test session'); });
testRoutes.post('/:testSessionId/submit', (req, res) => { /* testController.submitTest */ res.send('Submit test answers'); });

export default testRoutes