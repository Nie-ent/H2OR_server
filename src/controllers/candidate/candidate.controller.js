import path from "path";
import cloudinary from "../../config/cloudinary.config.js";
import fs from 'fs/promises'
import {
    addCandidateAddressService,
    applyResumeService,
    approveCandidateStatusService,
    createCandidateDocumentService,
    deleteCandidateAddressService,
    deleteCandidateDocumentService,
    deleteCandidateService,
    findCandidate,
    findCandidateById,
    getCandidateDocumentsService,
    getCandidateInfoByIdService,
    getCandidateStatusService,
    rejectCandidateStatusService,
    requestUpdateCandidateStatusService,
    updateCandidateAddressService,
    updateCandidateService,
    updateCandidateStatusService,
}
    from "../../services/candidate/candidate.service.js";

export const resumeApplication = async (req, res) => {
    console.log(req.body)
    try {
        const { firstName, lastName, email, phone, gender, age, stack, expected_salary } = req.body;

        const existingCandidate = await findCandidate(email);
        if (existingCandidate) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const newCandidate = await applyResumeService(
            firstName,
            lastName,
            email,
            phone,
            gender,
            age,
            stack,
            expected_salary
        );
        console.log("newCandidate",newCandidate)

        return res.status(201).json({
            message: "Candidate created successfully",
            candidate: newCandidate
        });

    } catch (error) {
        console.error("Error creating candidate:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const getCandidateInfoById = async (req, res) => {
    try {
        const { id } = req.params

        console.log('id', id)

        const candidate = await getCandidateInfoByIdService(id)

        if (!candidate) {
            return res.status(404).json({ message: "Candidate not found" });
        }

        return res.status(200).json({
            message: "Candidate retrieved successfully",
            candidate
        });

    } catch (error) {
        console.error("Error getting candidate by id:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const updateCandidateInfo = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        if (!id) {
            return res.status(400).json({ message: "Candidate ID is required" });
        }

        const existingCandidate = await findCandidateById(id);

        if (!existingCandidate) {
            return res.status(404).json({ message: "Candidate not found" });
        }

        const updatedCandidate = await updateCandidateService(id, updateData);

        return res.status(200).json({
            message: "Candidate updated successfully",
            candidate: updatedCandidate,
        });

    } catch (error) {
        console.error("Error updating candidate:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const deleteCandidate = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: "Candidate ID is required" });
        }

        const existingCandidate = await findCandidateById(id);

        if (!existingCandidate) {
            return res.status(404).json({ message: "Candidate not found" });
        }

        await deleteCandidateService(id);

        return res.status(200).json({
            message: "Candidate deleted successfully"
        });

    } catch (error) {
        console.error("Error deleting candidate:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const addCandidateAddress = async (req, res) => {
    try {
        const addressData = req.body;

        if (!addressData.candidate_id) {
            return res.status(400).json({ message: "Candidate ID is required" });
        }

        const newAddress = await addCandidateAddressService(addressData);

        return res.status(201).json({
            message: "Address added successfully",
            address: newAddress,
        });
    } catch (error) {
        console.error("Error adding candidate address:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const createCandidateDocument = async (req, res) => {
    let uploadResult

    try {
        const haveFile = req.file
        console.log('haveFile', haveFile)
        if (haveFile) {
            uploadResult = await cloudinary.uploader.upload(haveFile.path, {
                folder: "documents",
            });
        }

        const file_url = uploadResult.secure_url
        const file_type = uploadResult.type
        const doc_type = haveFile.fieldname

        console.log('uploadResult', uploadResult)

        const documentData = { candidate_id, file_url, file_type, doc_type }
        const newDocument = await createCandidateDocumentService(documentData);

        return res.status(201).json({
            message: "Document created successfully",
            document: newDocument,
        });
    } catch (error) {
        console.error("Error creating document:", error.message);
        return res.status(500).json({ message: error.message || "Internal server error" });
    } finally {
        fs.unlink(req.file.path)
    }
};

export const updateCandidateAddress = async (req, res) => {
    try {
        const { id } = req.params; // address_id
        const updateData = req.body;

        const updatedAddress = await updateCandidateAddressService(id, updateData);

        res.status(200).json({
            message: "Address updated successfully",
            address: updatedAddress,
        });
    } catch (error) {
        console.error("Error updating candidate address:", error.message);
        res.status(400).json({ message: error.message });
    }
};

export const deleteCandidateAddress = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedAddress = await deleteCandidateAddressService(id);

        res.status(200).json({
            message: "Address deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting candidate address:", error.message);
        res.status(400).json({ message: error.message });
    }
};

export const deleteCandidateDocument = async (req, res) => {
    try {
        const { document_id } = req.params;

        const deletedDoc = await deleteCandidateDocumentService(document_id);

        res.status(200).json({
            message: "Document deleted successfully",
            document: deletedDoc,
        });
    } catch (error) {
        console.error("Error deleting document:", error.message);
        res.status(400).json({ message: error.message });
    }
};

export const getCandidateDoc = async (req, res) => {
    try {
        const { id } = req.params;

        const documents = await getCandidateDocumentsService(id);

        res.status(200).json({
            message: "Documents retrieved successfully",
            documents,
        });
    } catch (error) {
        console.error("Error fetching candidate documents:", error.message);
        res.status(400).json({ message: error.message });
    }
};


export const getCandidateStatus = async (req, res) => {
    try {
        const { id } = req.params;

        const statuses = await getCandidateStatusService(id);

        res.status(200).json({
            message: "Candidate statuses retrieved successfully",
            statuses,
        });
    } catch (error) {
        console.error("Error fetching candidate statuses:", error.message);
        res.status(400).json({ message: error.message });
    }
};

export const updateCadidateStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const statusData = req.body;

        const updatedStatus = await updateCandidateStatusService(id, statusData);

        res.status(201).json({
            message: "Candidate status updated successfully",
            status: updatedStatus,
        });
    } catch (error) {
        console.error("Error updating candidate status:", error.message);
        res.status(400).json({ message: error.message });
    }
};

export const requestUpdateCandidateStatus = async (req, res) => {
    try {
        const newRequest = await requestUpdateCandidateStatusService(req.body);

        return res.status(201).json({
            message: "Status update request created successfully",
            data: newRequest
        });

    } catch (error) {
        console.error("Error creating status update request:", error);
        return res.status(500).json({
            message: error.message || "Internal server error"
        });
    }
};

export const approveCandidateStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const adminId = req.body.adminId;

        if (!adminId) return res.status(400).json({ message: "Admin ID is required" });

        const updatedRequest = await approveCandidateStatusService(id, adminId);

        res.status(200).json({
            message: "Status update request approved successfully",
            data: updatedRequest,
        });
    } catch (error) {
        console.error("Error approving status request:", error.message);
        res.status(400).json({ message: error.message });
    }
};

export const rejectCandidateStatus = async (req, res) => {
    try {
        const { id } = req.params; // status_update_request_id
        const adminId = req.body.adminId; // ผู้อนุมัติ

        if (!adminId) return res.status(400).json({ message: "Admin ID is required" });

        const updatedRequest = await rejectCandidateStatusService(id, adminId);

        res.status(200).json({
            message: "Status update request rejected successfully",
            data: updatedRequest,
        });
    } catch (error) {
        console.error("Error rejecting status request:", error.message);
        res.status(400).json({ message: error.message });
    }
};