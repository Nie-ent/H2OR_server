import { z } from "zod";

// ------------------------------
// ENUMS
// ------------------------------
export const RoleEnum = z.enum(["admin", "super_admin"]);
export const DifficultyEnum = z.enum(["easy", "medium", "hard"]);
export const StatusEnum = z.enum(["pending", "accepted", "rejected"]);
export const CandidateStatusEnumEnum = z.enum(["pending", "pass", "fail"]);
export const DocTypeEnum = z.enum(["pdf", "png", "jpg"]);
export const AddressTypeEnum = z.enum(["primary", "mailing", "permanent"]);

// ------------------------------
// ADMIN MODEL
// ------------------------------
export const adminUserSchema = z.object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().email(),
    role: z.enum(['admin', 'super_admin']),
    password_hash: z.string(),
    created_at: z.date().optional(),
});

// ------------------------------
// CANDIDATE MODEL
// ------------------------------
export const candidateSchema = z.object({
    candidate_id: z.string().uuid().optional(),
    first_name: z.string().min(1),
    last_name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().optional(),
    gender: z.string().optional(),
    age: z.number().int().positive().optional(),
    experience_salary: z.number().int().optional(),
    expected_salary: z.number().int().optional(),
    stack: z.string().optional(),
    id_card: z.string().optional(),
});

// ------------------------------
// ADDRESS MODEL
// ------------------------------
export const addressSchema = z.object({
    address_id: z.string().uuid().optional(),
    candidate_id: z.string().uuid(),
    address_line1: z.string().min(1),
    address_line2: z.string().optional(),
    city: z.string(),
    state: z.string().optional(),
    postal_code: z.string(),
    country: z.string(),
    address_type: AddressTypeEnum,
    is_current: z.boolean().optional(),
});

// ------------------------------
// CANDIDATE STATUS & STATUS UPDATE
// ------------------------------
export const candidateStatusSchema = z.object({
    candidate_status_id: z.string().uuid().optional(),
    candidate_id: z.string().uuid(),
    status: CandidateStatusEnumEnum,
    updated_by: z.string().uuid().optional(),
    created_at: z.date().optional(),
    updated_at: z.date().optional(),
});

export const statusUpdateRequestsSchema = z.object({
    status_update_request_id: z.string().uuid().optional(),
    candidate_status_id: z.string().uuid(),
    requested_status: StatusEnum,
    request_by: z.string().uuid().optional(),
    approve_by: z.string().uuid().optional(),
    status: StatusEnum.optional(),
    created_at: z.date().optional(),
    approved_at: z.date().optional(),
});

// ------------------------------
// DOCUMENT MODEL
// ------------------------------
export const documentSchema = z.object({
    document_id: z.string().uuid().optional(),
    candidate_id: z.string().uuid(),
    file_url: z.string().url(),
    file_type: z.string(),
    doc_type: DocTypeEnum,
    uploaded_at: z.date().optional(),
});

// ------------------------------
// TESTING MODELS
// ------------------------------
export const questionSchema = z.object({
    question_id: z.string().uuid().optional(),
    question_text: z.string().min(1),
    mcq: z.boolean().optional(),
    difficulty: DifficultyEnum,
    created_at: z.date().optional(),
});

export const choiceSchema = z.object({
    choice_id: z.string().uuid().optional(),
    question_id: z.string().uuid(),
    choice_text: z.string(),
    is_correct: z.boolean().optional(),
});

export const testSchema = z.object({
    test_id: z.string().uuid().optional(),
    candidate_id: z.string().uuid(),
    total_score: z.number().int().optional(),
    created_at: z.date().optional(),
    completed_at: z.date().optional(),
});

export const testQuestionSchema = z.object({
    test_question_id: z.string().uuid().optional(),
    test_id: z.string().uuid(),
    question_id: z.string().uuid(),
});

export const testAnswerSchema = z.object({
    test_answer_id: z.string().uuid().optional(),
    test_id: z.string().uuid(),
    question_id: z.string().uuid(),
    selected_choice_id: z.string().uuid().optional(),
    is_correct: z.boolean().optional(),
});
