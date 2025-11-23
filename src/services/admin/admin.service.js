import prisma from "../../config/prisma-client.config.js"

export const findAdminService = async (email) => {
    const existingUser = await prisma.adminUser.findUnique({
        where: { email },
    })
    return existingUser
}

export const registerAdminService = async (firstName, lastName, email, role, passwordHash) => {
    const newAdmin = await prisma.adminUser.create({
        data: {
            first_name: firstName,
            last_name: lastName,
            email,
            role,
            password_hash: passwordHash,
        },
    });

    return newAdmin
}