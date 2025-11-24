import { adminUserSchema } from '../validation/zod.validation.js';
import { z } from 'zod';

export const registerAdminDto = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    role: z.enum(['admin', 'super_admin']),
    password: z.string(),
}).transform((data) => ({
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    role: data.role,
}));

export const loginAdminDto = z.object({
    email: z.string().email(),
    password: z.string(),
});

export const adminIdParamsDto = z.object({
    id: z.string().uuid("Invalid admin_user_id"),
});