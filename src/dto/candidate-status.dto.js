import { z } from 'zod';
import { candidateStatusSchema } from '../schemas/candidateStatus.schema.js';

export const createCandidateStatusDto = candidateStatusSchema.omit({
    candidate_status_id: true,
    created_at: true,
    updated_at: true,
});
