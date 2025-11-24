import prisma from "../../config/prisma-client.config.js";

export const getCandidateNumService = async () => {
    try {
        const totalCandidates = await prisma.candidate.count();
        return totalCandidates;
    } catch (error) {
        console.error("Error counting candidates:", error);
        throw error;
    }
};

export const getTotalTestScoreService = async () => {
    try {
        const result = await prisma.test.aggregate({
            _sum: {
                total_score: true,
            },
        });

        return result._sum.total_score || 0;
    } catch (error) {
        console.error("Error summing test scores:", error);
        throw error;
    }
};

export const getTotalDocumentsService = async () => {
    try {
        const totalDocuments = await prisma.document.count();
        return totalDocuments;
    } catch (error) {
        console.error("Error counting documents:", error);
        throw error;
    }
};

export const getCandidateStatusSummaryService = async () => {
    try {
        const statusCounts = await prisma.candidateStatus.groupBy({
            by: ['status'],
            _count: {
                status: true,
            },
        });

        // แปลงผลลัพธ์ให้อยู่ในรูป { pending: X, pass: Y, fail: Z }
        const summary = {
            pending: 0,
            pass: 0,
            fail: 0,
        };

        statusCounts.forEach(item => {
            summary[item.status] = item._count.status;
        });

        return summary;
    } catch (error) {
        console.error("Error fetching candidate status summary:", error);
        throw error;
    }
};