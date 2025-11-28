import { Router } from "express";
import { getTestQuestion, getTestResult, startTest, submitAnswer } from "../controllers/test/test.controller.js";

const testRoutes = Router()

testRoutes.post('/tests/start/:candidate_id', startTest)
testRoutes.get('/tests/:test_id/questions', getTestQuestion)
testRoutes.post('/tests/:test_id/answers', submitAnswer)
testRoutes.get('/tests/:test_id/result', getTestResult)

export default testRoutes