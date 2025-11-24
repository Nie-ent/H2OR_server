import { z } from 'zod';
import { statusUpdateRequestsSchema } from '../schemas/statusUpdateRequests.schema.js';

export const createStatusUpdateRequestDto = statusUpdateRequestsSchema.omit({
    status_update_request_id: true,
    created_at: true,
    approved_at: true,
    status: true,
});
