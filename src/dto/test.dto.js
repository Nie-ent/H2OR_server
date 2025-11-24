import { z } from 'zod';
import { testSchema } from '../schemas/test.schema.js';

export const createTestDto = testSchema.omit({
    test_id: true,
    created_at: true,
    completed_at: true,
});
