import { z } from 'zod';
import { choiceSchema } from '../schemas/choice.schema.js';

export const createChoiceDto = choiceSchema.omit({
    choice_id: true,
});
