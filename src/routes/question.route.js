import { Router } from "express";
import {
    addChoice,
    createNewQuestion,
    deleteChoice,
    deleteQuestion,
    getAllQuestion,
    updateQuestion
} from "../controllers/question/question.controller.js";

const questionRotues = Router()

questionRotues.get('/questions', getAllQuestion)
questionRotues.post('/questions', createNewQuestion)
questionRotues.put('/questions/:id', updateQuestion)
questionRotues.delete('/questions/:id', deleteQuestion)
questionRotues.post('/questions/:id/choices', addChoice)
questionRotues.delete('/choices/:choice_id', deleteChoice)

export default questionRotues