import { Router } from "express";
import { getTestQuestion, getTestResult, startTest, submitAnswer } from "../controllers/test/test.controller.js";

const testRoutes = Router()

testRoutes.post('/tests/start/:candidate_id', startTest)
testRoutes.get('/tests/:test_id/questions', getTestQuestion)
testRoutes.post('/test/:test_id/anwsers', submitAnswer)
testRoutes.get('/tests/:test_id/result', getTestResult)