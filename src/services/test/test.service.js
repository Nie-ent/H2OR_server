import prisma from "../../config/prisma-client.config.js";


// Helper Function: สำหรับสลับตำแหน่ง Array (Fisher-Yates Shuffle)
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

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

      // 3. สุ่มโจทย์ (ใช้ Raw Query เพื่อความเร็วและสุ่มจริง)
    // หมายเหตุ: ชื่อ field ที่ return จาก raw query อาจขึ้นอยู่กับ DB (มักจะเป็น snake_case)
    const randomQuestions = await prisma.$queryRaw`
        SELECT question_id, question_text, mcq, difficulty 
        FROM Question 
        ORDER BY RAND() 
        LIMIT ${numberOfQuestions};
    `;

    if (randomQuestions.length <= 0) {
        throw new Error("No questions available");
    }

    // const questions = await prisma.question.findMany({
    //     take: numberOfQuestions,
    //     orderBy: { created_at: 'desc' },
    // });

    const testQuestionPromises = randomQuestions.map(q =>
        prisma.testQuestion.create({
            data: {
                test_id: newTest.test_id,
                question_id: q.question_id,
            },
        })
    );
    await Promise.all(testQuestionPromises);

    // 5. ส่งกลับข้อมูล test พร้อมคำถาม (ไม่รวม choices)
    return {
        test_id: newTest.test_id,
        candidate_id: candidateId,
        questions: randomQuestions.map(q => ({
            question_id: q.question_id,
            question_text: q.question_text,
            mcq: q.mcq ? true : false,  // แปลง 1/0 เป็น boolean ถ้าจำเป็น
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

    return testQuestions.map(tq => {
        // ดึง choices ออกมาและสุ่มลำดับ
        const shuffledChoices = shuffleArray([...tq.question.choices]); // ใช้ spread [...] เพื่อ copy array ก่อน shuffle
        
        return {
        test_question_id: tq.test_question_id,
        question_id: tq.question.question_id,
        question_text: tq.question.question_text,
        mcq: tq.question.mcq,
        difficulty: tq.question.difficulty,
        choices: tq.question.choices.map(c => ({
            choice_id: c.choice_id,
            choice_text: c.choice_text,
            // is_correct: c.is_correct,  // ⚠️ ควรปิดไว้ ไม่ส่งเฉลยไปให้ Frontend เห็น (ป้องกันการโกง)
        })),
    }});
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