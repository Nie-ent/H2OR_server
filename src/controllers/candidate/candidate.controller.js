import { applyResumeService, findCandidate, getCandidateInfoByIdService } from "../../services/candidate/candidate.service.js";

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
