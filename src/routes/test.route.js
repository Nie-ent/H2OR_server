import { Router } from "express";
import { getTestQuestion, getTestResult, startTest, submitAnswer } from "../controllers/test/test.controller.js";

const testRoutes = Router()

testRoutes.post('/start/:candidate_id', startTest)
testRoutes.get('/:test_id/questions', getTestQuestion)
testRoutes.post('/:test_id/answers', submitAnswer)
testRoutes.get('/:test_id/result', getTestResult)

export default testRoutes