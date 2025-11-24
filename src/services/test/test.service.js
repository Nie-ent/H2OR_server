import prisma from "../../config/prisma-client.config.js";

export const startTestService = async (candidateId, numberOfQuestions = 10) => {
    const candidate = await prisma.candidate.findUnique({
        where: { candidate_id: candidateId },
    });
    if (!candidate) throw new Error("Candidate not found");

    const newTest = await prisma.test.create({
        data: {
            candidate_id: candidateId,
            total_score: 0,
        },
    });

    const questions = await prisma.question.findMany({
        take: numberOfQuestions,
        orderBy: { created_at: 'desc' },
    });

    const testQuestionPromises = questions.map(q =>
        prisma.testQuestion.create({
            data: {
                test_id: newTest.test_id,
                question_id: q.question_id,
            },
        })
    );
    await Promise.all(testQuestionPromises);

    return {
        test_id: newTest.test_id,
        candidate_id: candidateId,
        questions: questions.map(q => ({
            question_id: q.question_id,
            question_text: q.question_text,
            mcq: q.mcq,
            difficulty: q.difficulty,
        })),
    };
};

export const getTestQuestionsService = async (testId) => {

    const test = await prisma.test.findUnique({
        where: { test_id: testId },
    });
    if (!test) throw new Error("Test not found");

    const testQuestions = await prisma.testQuestion.findMany({
        where: { test_id: testId },
        include: {
            question: {
                include: {
                    choices: true,
                },
            },
        },
    });

    return testQuestions.map(tq => ({
        test_question_id: tq.test_question_id,
        question_id: tq.question.question_id,
        question_text: tq.question.question_text,
        mcq: tq.question.mcq,
        difficulty: tq.question.difficulty,
        choices: tq.question.choices.map(c => ({
            choice_id: c.choice_id,
            choice_text: c.choice_text,
            is_correct: c.is_correct,
        })),
    }));
};

export const submitTestAnswersService = async (testId, answers) => {
    // ตรวจสอบว่ามี test อยู่จริง
    const test = await prisma.test.findUnique({
        where: { test_id: testId },
    });
    if (!test) throw new Error("Test not found");

    const submittedAnswers = [];

    for (const ans of answers) {
        // ตรวจสอบว่าคำถามอยู่ใน test หรือไม่
        const testQuestion = await prisma.testQuestion.findFirst({
            where: {
                test_id: testId,
                question_id: ans.question_id,
            },
        });

        if (!testQuestion) throw new Error(`Question ${ans.question_id} not in test`);

        // ตรวจสอบว่า choice ถูกต้อง
        const choice = await prisma.choice.findUnique({
            where: { choice_id: ans.selected_choice_id },
        });

        if (!choice) throw new Error(`Choice ${ans.selected_choice_id} not found`);

        const isCorrect = choice.is_correct;

        // บันทึกคำตอบ
        const testAnswer = await prisma.testAnswer.upsert({
            where: {
                test_id_question_id: { test_id: testId, question_id: ans.question_id },
            },
            update: {
                selected_choice_id: ans.selected_choice_id,
                is_correct: isCorrect,
            },
            create: {
                test_id: testId,
                question_id: ans.question_id,
                selected_choice_id: ans.selected_choice_id,
                is_correct: isCorrect,
            },
        });

        submittedAnswers.push(testAnswer);
    }

    // คำนวณ total score (จำนวนถูกต้อง)
    const totalCorrect = submittedAnswers.filter(a => a.is_correct).length;

    await prisma.test.update({
        where: { test_id: testId },
        data: { total_score: totalCorrect, completed_at: new Date() },
    });

    return { totalCorrect, submittedAnswers };
};

export const getTestResultService = async (testId) => {
    // ตรวจสอบว่ามี test อยู่จริง
    const test = await prisma.test.findUnique({
        where: { test_id: testId },
        include: {
            test_answers: {
                include: {
                    question: {
                        include: {
                            choices: true,
                        },
                    },
                    selected_choice: true,
                },
            },
        },
    });

    if (!test) throw new Error("Test not found");

    // จัดโครงสร้างผลลัพธ์
    const answers = test.test_answers.map(a => ({
        question_id: a.question_id,
        question_text: a.question.question_text,
        selected_choice: a.selected_choice
            ? {
                choice_id: a.selected_choice.choice_id,
                choice_text: a.selected_choice.choice_text,
                is_correct: a.is_correct,
            }
            : null,
        all_choices: a.question.choices.map(c => ({
            choice_id: c.choice_id,
            choice_text: c.choice_text,
            is_correct: c.is_correct, // อาจไม่ส่งสำหรับ candidate view
        })),
        is_correct: a.is_correct,
    }));

    return {
        test_id: test.test_id,
        candidate_id: test.candidate_id,
        total_score: test.total_score,
        completed_at: test.completed_at,
        answers,
    };
};