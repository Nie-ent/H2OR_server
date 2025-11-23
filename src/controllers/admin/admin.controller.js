import { findAdminService, registerAdminService } from "../../services/admin/admin.service.js";
import prisma from "../../config/prisma-client.config.js";
import { hashString } from "../../libs/hash.lib.js";

export const registerAdmin = async (req, res) => {
    const { firstName, lastName, email, password, role } = req.body;

    try {
        const existingUser = await findAdminService(email)
        if (existingUser) return res.status(400).json({ message: "Email already exists" });

        const passwordHash = await hashString(password);

        const newAdmin = await registerAdminService(firstName, lastName, email, role, passwordHash)

        res.status(201).json({ success: true, admin: newAdmin });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
};
