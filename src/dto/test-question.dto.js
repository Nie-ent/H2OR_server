import { z } from 'zod';
import { testQuestionSchema } from '../schemas/testQuestion.schema.js';

export const createTestQuestionDto = testQuestionSchema.omit({
    test_question_id: true,
});
