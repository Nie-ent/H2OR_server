import prisma from "../src/config/prisma-client.config.js";
import { Role, Difficulty, CandidateStatusEnum, DocTypeEnum, AddressType, StatusEnum } from "@prisma/client";
import argon2 from "argon2";

async function main() {
    console.log('🚀 Seed script started');

    // -----------------------------
    // 1️⃣ ADMIN USERS
    // -----------------------------
    const passwordHash = await argon2.hash('super_admin_pw_123');
    const admin1 = await prisma.adminUser.upsert({
        where: { email: '[super.admin@example.com](mailto:super.admin@example.com)' },
        update: {},
        create: {
            first_name: 'Sara',
            last_name: 'Admin',
            email: '[super.admin@example.com](mailto:super.admin@example.com)',
            role: Role.super_admin,
            password_hash: passwordHash,
        },
    });
    console.log(`✅ Created admin user: ${admin1.email}`);

    // -----------------------------
    // 2️⃣ CANDIDATES
    // -----------------------------
    const candidate1 = await prisma.candidate.upsert({
        where: { email: '[alice.dev@mail.com](mailto:alice.dev@mail.com)' },
        update: {},
        create: {
            first_name: 'Alice',
            last_name: 'Developer',
            email: '[alice.dev@mail.com](mailto:alice.dev@mail.com)',
            phone: '0981112222',
            gender: 'Female',
            age: 25,
            experience_salary: 30000,
            expected_salary: 45000,
            stack: 'React, Node.js, SQL',
            id_card: '1100000000001',
        },
    });

    const candidate2 = await prisma.candidate.upsert({
        where: { email: '[bob.pm@mail.com](mailto:bob.pm@mail.com)' },
        update: {},
        create: {
            first_name: 'Bob',
            last_name: 'ProjectManager',
            email: '[bob.pm@mail.com](mailto:bob.pm@mail.com)',
            phone: '0813334444',
            gender: 'Male',
            age: 32,
            expected_salary: 60000,
            stack: 'Agile, Scrum, JIRA',
            id_card: '1100000000002',
        },
    });

    console.log(`✅ Created candidates: ${candidate1.email}, ${candidate2.email}`);

    // -----------------------------
    // 3️⃣ ADDRESSES
    // -----------------------------
    const addresses = [
        { candidate: candidate1, type: AddressType.primary, line1: '123/4 Main St.', city: 'Bangkok', postal: '10110', country: 'Thailand', is_current: true },
        { candidate: candidate2, type: AddressType.permanent, line1: '99/9 River Rd.', city: 'Chiang Mai', postal: '50000', country: 'Thailand', is_current: false },
    ];

    for (const addr of addresses) {
        await prisma.address.upsert({
            where: {
                candidate_id_address_type: {
                    candidate_id: addr.candidate.candidate_id,
                    address_type: addr.type,
                },
            },
            update: {},
            create: {
                candidate_id: addr.candidate.candidate_id,
                address_line1: addr.line1,
                city: addr.city,
                postal_code: addr.postal,
                country: addr.country,
                address_type: addr.type,
                is_current: addr.is_current,
            },
        });
    }
    console.log('✅ Addresses created or upserted');

    // -----------------------------
    // 4️⃣ QUESTIONS & CHOICES
    // -----------------------------
    const questionsData = [
        {
            text: 'What is the Primary Key in a database?',
            difficulty: Difficulty.easy,
            choices: [
                { text: 'A key that uniquely identifies each record.', correct: true },
                { text: 'A key used to link two tables.', correct: false },
                { text: 'A key used for sorting data.', correct: false },
            ],
        },
        {
            text: 'Which programming language is commonly used for front-end web development?',
            difficulty: Difficulty.medium,
            choices: [
                { text: 'Python', correct: false },
                { text: 'Java', correct: false },
                { text: 'JavaScript', correct: true },
            ],
        },
    ];

    const questions = [];
    for (const q of questionsData) {
        const question = await prisma.question.create({
            data: {
                question_text: q.text,
                difficulty: q.difficulty,
                mcq: true,
                choices: { create: q.choices.map(c => ({ choice_text: c.text, is_correct: c.correct })) },
            },
        });
        questions.push(question);
    }
    console.log('✅ Questions and choices created');

    // -----------------------------
    // 5️⃣ TESTS & TESTQUESTIONS
    // -----------------------------
    const test1 = await prisma.test.upsert({
        where: { test_id: 'test1-' + candidate1.candidate_id },
        update: {},
        create: { test_id: 'test1-' + candidate1.candidate_id, candidate_id: candidate1.candidate_id },
    });

    for (const q of questions) {
        await prisma.testQuestion.upsert({
            where: { test_id_question_id: { test_id: test1.test_id, question_id: q.question_id } },
            update: {},
            create: { test_id: test1.test_id, question_id: q.question_id },
        });
    }
    console.log('✅ Test and test questions linked');

    // -----------------------------
    // 6️⃣ TEST ANSWERS
    // -----------------------------
    const correctChoiceQ1 = await prisma.choice.findFirst({ where: { question_id: questions[0].question_id, is_correct: true } });
    const incorrectChoiceQ2 = await prisma.choice.findFirst({ where: { question_id: questions[1].question_id, is_correct: false } });

    const testAnswersData = [
        { question: questions[0], selected_choice: correctChoiceQ1, is_correct: true },
        { question: questions[1], selected_choice: incorrectChoiceQ2, is_correct: false },
    ];

    for (const ta of testAnswersData) {
        await prisma.testAnswer.upsert({
            where: { test_id_question_id: { test_id: test1.test_id, question_id: ta.question.question_id } },
            update: {},
            create: {
                test_id: test1.test_id,
                question_id: ta.question.question_id,
                selected_choice_id: ta.selected_choice?.choice_id,
                is_correct: ta.is_correct,
            },
        });
    }
    console.log('✅ Test answers created');

    // -----------------------------
    // 7️⃣ CANDIDATE STATUS, DOCUMENTS & STATUS UPDATES
    // -----------------------------
    const status1 = await prisma.candidateStatus.upsert({
        where: { candidate_status_id: 'status-' + candidate1.candidate_id },
        update: {},
        create: { candidate_status_id: 'status-' + candidate1.candidate_id, candidate_id: candidate1.candidate_id, status: CandidateStatusEnum.pass, updated_by: admin1.admin_user_id },
    });

    await prisma.document.upsert({
        where: { candidate_id_doc_type: { candidate_id: candidate1.candidate_id, doc_type: DocTypeEnum.pdf } },
        update: {},
        create: { candidate_id: candidate1.candidate_id, file_url: '[https://docs.example.com/alice/cv.pdf](https://docs.example.com/alice/cv.pdf)', file_type: 'application/pdf', doc_type: DocTypeEnum.pdf },
    });

    await prisma.statusUpdateRequests.upsert({
        where: { status_update_request_id: 'req-' + candidate1.candidate_id },
        update: {},
        create: { status_update_request_id: 'req-' + candidate1.candidate_id, candidate_status_id: status1.candidate_status_id, requested_status: StatusEnum.accepted, approve_by: admin1.admin_user_id, status: StatusEnum.accepted },
    });

    console.log('✅ Candidate status, documents, and status update requests created');
    console.log('🎉 Seeding finished successfully!');
}

main()
    .catch(e => { console.error(e); process.exit(1); })
    .finally(async () => { await prisma.$disconnect(); });
