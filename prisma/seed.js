import prisma from "../src/config/prisma-client.config.js";

const {
    Role,
    Difficulty,
    CandidateStatusEnum,
    DocTypeEnum,
    AddressType,
    StatusEnum
} = prisma;

async function main() {
    console.log('Start seeding...');

    // 1. ADMIN USERS
    const admin1 = await prisma.adminUser.upsert({
        where: { email: 'super.admin@example.com' },
        update: {},
        create: {
            first_name: 'Sara',
            last_name: 'Admin',
            email: 'super.admin@example.com',
            role: Role.super_admin,
            password_hash: 'hashed_super_admin_pw_123',
        },
    });
    console.log(`Created admin user: ${admin1.email}`);

    // 2. CANDIDATES
    const candidate1 = await prisma.candidate.upsert({
        where: { email: 'alice.dev@mail.com' },
        update: {},
        create: {
            first_name: 'Alice',
            last_name: 'Developer',
            email: 'alice.dev@mail.com',
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
        where: { email: 'bob.pm@mail.com' },
        update: {},
        create: {
            first_name: 'Bob',
            last_name: 'ProjectManager',
            email: 'bob.pm@mail.com',
            phone: '0813334444',
            gender: 'Male',
            age: 32,
            expected_salary: 60000,
            stack: 'Agile, Scrum, JIRA',
            id_card: '1100000000002',
        },
    });
    console.log(`Created candidates: ${candidate1.email}, ${candidate2.email}`);

    // 3. ADDRESS
    await prisma.address.createMany({
        data: [
            {
                candidate_id: candidate1.candidate_id,
                address_type: AddressType.primary,
                address_line1: '123/4 Main St.',
                city: 'Bangkok',
                postal_code: '10110',
                country: 'Thailand',
            },
            {
                candidate_id: candidate2.candidate_id,
                address_type: AddressType.permanent,
                address_line1: '99/9 River Rd.',
                city: 'Chiang Mai',
                postal_code: '50000',
                country: 'Thailand',
                is_current: false,
            },
        ],
    });
    console.log('Created addresses.');

    // 4. QUESTIONS & CHOICES
    const q1 = await prisma.question.upsert({
        where: { question_id: 1 },
        update: {},
        create: {
            question_text: 'What is the Primary Key in a database?',
            difficulty: Difficulty.easy,
            mcq: true,
            choices: {
                create: [
                    { choice_text: 'A key that uniquely identifies each record.', is_correct: true },
                    { choice_text: 'A key used to link two tables.', is_correct: false },
                    { choice_text: 'A key used for sorting data.', is_correct: false },
                ],
            },
        },
    });

    const q2 = await prisma.question.upsert({
        where: { question_id: 2 },
        update: {},
        create: {
            question_text: 'Which programming language is commonly used for front-end web development?',
            difficulty: Difficulty.medium,
            mcq: true,
            choices: {
                create: [
                    { choice_text: 'Python', is_correct: false },
                    { choice_text: 'Java', is_correct: false },
                    { choice_text: 'JavaScript', is_correct: true },
                ],
            },
        },
    });
    console.log('Created questions and choices.');

    // 5. TEST
    const test1 = await prisma.test.create({
        data: {
            candidate_id: candidate1.candidate_id,
        },
    });
    console.log(`Created test ID: ${test1.test_id} for ${candidate1.first_name}.`);

    // 6. TEST QUESTIONS
    await prisma.testQuestion.createMany({
        data: [
            { test_id: test1.test_id, question_id: q1.question_id },
            { test_id: test1.test_id, question_id: q2.question_id },
        ],
    });
    console.log('Linked questions to the test.');

    // 7. TEST ANSWERS
    const correctChoiceQ1 = await prisma.choice.findFirst({
        where: { question_id: q1.question_id, is_correct: true },
    });

    const incorrectChoiceQ2 = await prisma.choice.findFirst({
        where: { question_id: q2.question_id, is_correct: false },
    });

    await prisma.testAnswer.createMany({
        data: [
            {
                test_id: test1.test_id,
                question_id: q1.question_id,
                selected_choice_id: correctChoiceQ1?.choice_id,
                is_correct: true,
            },
            {
                test_id: test1.test_id,
                question_id: q2.question_id,
                selected_choice_id: incorrectChoiceQ2?.choice_id,
                is_correct: false,
            },
        ],
    });

    console.log('Created test answers and score.');

    // 8. CANDIDATE STATUS & DOCUMENTS
    const status1 = await prisma.candidateStatus.create({
        data: {
            candidate_id: candidate1.candidate_id,
            status: CandidateStatusEnum.pass,
            updated_by: admin1.admin_user_id,
        },
    });

    await prisma.document.create({
        data: {
            candidate_id: candidate1.candidate_id,
            file_url: 'https://docs.example.com/alice/cv.pdf',
            file_type: 'application/pdf',
            doc_type: DocTypeEnum.pdf,
        },
    });

    await prisma.statusUpdateRequests.create({
        data: {
            candidate_status_id: status1.candidate_status_id,
            requested_status: StatusEnum.accepted,
            approve_by: admin1.admin_user_id,
            status: StatusEnum.accepted,
        },
    });

    console.log('Created candidate status and documents.');
    console.log('Seeding finished.');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
