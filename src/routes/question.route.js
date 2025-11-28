import { Router } from "express";
import {
    addChoice,
    createNewQuestion,
    deleteChoice,
    deleteQuestion,
    getAllQuestion,
    updateQuestion
} from "../controllers/question/question.controller.js";

const questionRoutes = Router()

questionRoutes.get('/questions', getAllQuestion)
questionRoutes.post('/questions', createNewQuestion)
questionRoutes.put('/questions/:id', updateQuestion)
questionRoutes.delete('/questions/:id', deleteQuestion)
questionRoutes.post('/questions/:id/choices', addChoice)
questionRoutes.delete('/choices/:choice_id', deleteChoice)

export default questionRoutes