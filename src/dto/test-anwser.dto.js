import { z } from 'zod';
import { testAnswerSchema } from '../schemas/testAnswer.schema.js';

export const createTestAnswerDto = testAnswerSchema.omit({
    test_answer_id: true,
});
