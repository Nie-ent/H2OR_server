import {
    addCandidateAddressService,
    applyResumeService,
    createCandidateDocumentService,
    deleteCandidateService,
    findCandidate,
    findCandidateById,
    getCandidateInfoByIdService,
    updateCandidateService,
}
    from "../../services/candidate/candidate.service.js";

export const resumeApplication = async (req, res) => {
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
    try {
        const documentData = req.body;

        const newDocument = await createCandidateDocumentService(documentData);

        return res.status(201).json({
            message: "Document created successfully",
            document: newDocument,
        });
    } catch (error) {
        console.error("Error creating document:", error.message);
        return res.status(500).json({ message: error.message || "Internal server error" });
    }
};