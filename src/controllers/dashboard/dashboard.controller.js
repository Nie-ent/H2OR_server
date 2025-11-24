import { getCandidateNumService, getCandidateStatusSummaryService, getTotalDocumentsService, getTotalTestScoreService } from "../../services/dashboard/dashboard.service.js";

export const getCandidateNum = async (req, res) => {
    try {
        const totalCandidates = await getCandidateNumService();

        res.status(200).json({
            message: "Dashboard overview retrieved successfully",
            totalCandidates,
        });
    } catch (error) {
        console.error("Error fetching dashboard overview:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const scoreSum = async (req, res) => {
    try {
        const totalScore = await getTotalTestScoreService();

        res.status(200).json({
            message: "Total test score retrieved successfully",
            totalScore,
        });
    } catch (error) {
        console.error("Error fetching total test score:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const fileUploadSum = async (req, res) => {
    try {
        const totalDocuments = await getTotalDocumentsService();

        res.status(200).json({
            message: "Total documents retrieved successfully",
            totalDocuments,
        });
    } catch (error) {
        console.error("Error fetching total documents:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
export const statusSum = async (req, res) => {
    try {
        const summary = await getCandidateStatusSummaryService();

        res.status(200).json({
            message: "Candidate status summary retrieved successfully",
            summary,
        });
    } catch (error) {
        console.error("Error fetching candidate status summary:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};