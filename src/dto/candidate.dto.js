import { z } from 'zod';
import { candidateSchema } from '../schemas/candidate.schema.js';

export const createCandidateDto = candidateSchema.omit({
    candidate_id: true,
});

export const updateCandidateDto = candidateSchema.partial();
