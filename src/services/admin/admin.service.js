import prisma from "../../config/prisma-client.config.js"

export const findAdminService = async (email) => {
    try {
        const existingUser = await prisma.adminUser.findUnique({
            where: { email },
        })
        return existingUser
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const registerAdminService = async (firstName, lastName, email, role, passwordHash) => {
    try {
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
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const getAdminService = async () => {
    try {
        const data = await prisma.adminUser.findMany()

        return data.map(({ password_hash, created_at, ...rest }) => rest)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const updateAdminService = async (id, role) => {
    try {
        const updatedAdmin = await prisma.adminUser.update({
            where: { admin_user_id: id },
            data: { role },
        });

        delete updatedAdmin.password_hash
        delete updatedAdmin.created_at

        return updatedAdmin

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const deleteAdminService = async (id) => {
    try {
        const deletedAdmin = await prisma.adminUser.delete({
            where: { admin_user_id: id },
        });
        return deletedAdmin;
    } catch (error) {
        console.error(`Failed to delete admin with id ${id}:`, error);
        return null;
    }
};
