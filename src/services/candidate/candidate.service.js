import prisma from "../../config/prisma-client.config.js"

export const findCandidate = async (email) => {
    try {
        const isCandidate = await prisma.candidate.findUnique({
            where: { email },
        })
        return isCandidate
    } catch (error) {
        console.log('Internal server Error')
    }
}

export const applyResumeService = async (firstName, lastName, email, phone, gender, age, stack, expectedSalary) => {
    try {
        const newCandidate = await prisma.candidate.create({
            data: {
                first_name: firstName,
                last_name: lastName,
                email,
                phone,
                gender,
                age,
                stack,
                expected_salary: expectedSalary,
            },
        });

        return newCandidate;
    } catch (error) {
        console.error("Error creating candidate:", error);
        throw error;
    }
}
