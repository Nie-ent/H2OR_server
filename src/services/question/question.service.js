import prisma from "../../config/prisma-client.config.js";

export const getAllQuestionsService = async () => {
    const questions = await prisma.question.findMany({
        include: {
            choices: true,
        },
    });

    return questions;
};

export const createQuestionService = async (questionData) => {
    const { question_text, mcq = true, difficulty, choices } = questionData;

    if (!question_text || !difficulty || !Array.isArray(choices) || choices.length === 0) {
        throw new Error("Missing required fields or choices");
    }

    // สร้างคำถาม พร้อม choices
    const newQuestion = await prisma.question.create({
        data: {
            question_text,
            mcq,
            difficulty,
            choices: {
                create: choices.map(c => ({
                    choice_text: c.choice_text,
                    is_correct: c.is_correct ?? false,
                })),
            },
        },
        include: { choices: true }, // ดึง choices กลับมาด้วย
    });

    return newQuestion;
};

export const updateQuestionService = async (questionId, updateData) => {
    const { question_text, mcq, difficulty, choices } = updateData;

    // ตรวจสอบว่าคำถามมีอยู่หรือไม่
    const existingQuestion = await prisma.question.findUnique({
        where: { question_id: questionId },
        include: { choices: true },
    });

    if (!existingQuestion) {
        throw new Error("Question not found");
    }

    // อัปเดตคำถาม
    const updatedQuestion = await prisma.question.update({
        where: { question_id: questionId },
        data: {
            question_text: question_text ?? existingQuestion.question_text,
            mcq: mcq ?? existingQuestion.mcq,
            difficulty: difficulty ?? existingQuestion.difficulty,
            choices: choices
                ? {
                    // Upsert: update existing or create new
                    upsert: choices.map((c) => ({
                        where: { choice_id: c.choice_id ?? "" }, // ถ้าไม่มี choice_id จะสร้างใหม่
                        create: {
                            choice_text: c.choice_text,
                            is_correct: c.is_correct ?? false,
                        },
                        update: {
                            choice_text: c.choice_text,
                            is_correct: c.is_correct ?? false,
                        },
                    })),
                }
                : undefined,
        },
        include: { choices: true },
    });

    return updatedQuestion;
};

export const deleteQuestionService = async (questionId) => {
    // ตรวจสอบว่าคำถามมีอยู่หรือไม่
    const existingQuestion = await prisma.question.findUnique({
        where: { question_id: questionId },
    });

    if (!existingQuestion) {
        throw new Error("Question not found");
    }

    // ลบคำถาม (Prisma จะลบ choices ที่เกี่ยวข้องอัตโนมัติถ้ามี relation cascade)
    const deletedQuestion = await prisma.question.delete({
        where: { question_id: questionId },
    });

    return deletedQuestion;
};

export const addChoiceService = async (questionId, choiceData) => {
    const { choice_text, is_correct } = choiceData;

    // ตรวจสอบว่าคำถามมีอยู่หรือไม่
    const question = await prisma.question.findUnique({
        where: { question_id: questionId },
    });

    if (!question) {
        throw new Error("Question not found");
    }

    // สร้าง choice ใหม่
    const newChoice = await prisma.choice.create({
        data: {
            question_id: questionId,
            choice_text,
            is_correct: is_correct ?? false,
        },
    });

    return newChoice;
};

export const deleteChoiceService = async (choiceId) => {
    // ตรวจสอบว่า choice มีอยู่หรือไม่
    const existingChoice = await prisma.choice.findUnique({
        where: { choice_id: choiceId },
    });

    if (!existingChoice) {
        throw new Error("Choice not found");
    }

    // ลบ choice
    const deletedChoice = await prisma.choice.delete({
        where: { choice_id: choiceId },
    });

    return deletedChoice;
};