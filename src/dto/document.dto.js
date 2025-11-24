import { z } from 'zod';
import { documentSchema } from '../schemas/document.schema.js';

export const createDocumentDto = documentSchema.omit({
    document_id: true,
    uploaded_at: true,
});
