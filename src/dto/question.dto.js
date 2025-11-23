import { z } from 'zod';
import { questionSchema } from '../schemas/question.schema.js';

export const createQuestionDto = questionSchema.omit({
    question_id: true,
    created_at: true,
});
