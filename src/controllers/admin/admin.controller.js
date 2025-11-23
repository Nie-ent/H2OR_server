import { deleteAdminService, findAdminService, getAdminService, registerAdminService, updateAdminService } from "../../services/admin/admin.service.js";
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

export const getAdmin = async (req, res) => {
    try {
        const data = await getAdminService()
        res.status(200).json({ message: data })
    } catch (error) {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
    }
}

export const updateAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const { role } = req.body;

        const updatedAdmin = await updateAdminService(id, role)
        res.status(200).json({ message: "Admin updated successfully", data: updatedAdmin });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedAdmin = await deleteAdminService(id);

        if (!deletedAdmin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        res.status(200).json({ message: "Admin deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};