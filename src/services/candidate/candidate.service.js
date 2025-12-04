import prisma from "../../config/prisma-client.config.js"
import createHttpError from "http-errors"
import ai from "../ai/ai.service.js"

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

export const applyResumeService = async (firstName, lastName, email, phone, gender, age, stack, expectedSalary, idCard) => {
    try {
        const newCandidate = await prisma.candidate.create({
            data: {
                firstName,
                lastName,
                email,
                phone,
                gender,
                age,
                stack,
                expected_salary: expectedSalary,
                id_card: idCard
            },
        });
        // console.log("nexCandidate: ", newCandidate)
        return newCandidate;
    } catch (error) {
        console.error("Error creating candidate:", error);
        throw error;
    }
}


export const getCandidateInfoByIdService = async (id) => {
    try {
        const candidate = await prisma.candidate.findUnique({
            where: { candidate_id: id },
            include: {
                addresses: true,
                documents: true,
                candidate_statuses: true,
                tests: true
            }
        });
        return candidate
    } catch (error) {
        console.error("Error creating candidate:", error);
        throw error;
    }
}

export const findCandidateById = async (id) => {
    return await prisma.candidate.findUnique({
        where: { candidate_id: id }
    });
};

export const updateCandidateService = async (id, data) => {
    return await prisma.candidate.update({
        where: { candidate_id: id },
        data: {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            gender: data.gender,
            age: data.age,
            stack: data.stack,
            expectedSalary: data.expectedSalary,
        }
    });
};

export const giveScoreCandidateResume = async (id, pdfBase64) => {
    // AI return { score: 99 }
    const { score } = await ai(pdfBase64);

    // Update candidate score
    const updatedCandidate = await prisma.candidate.update({
        where: { candidate_id: id },
        data: { score: score }
    });

    return updatedCandidate;
};


export const deleteCandidateService = async (id) => {
    return await prisma.candidate.delete({
        where: { candidate_id: id }
    });
};

export const addCandidateAddressService = async (addressData) => {
    try {
        console.log("addressData:", addressData);

        const newAddress = await prisma.address.create({
            data: {
                candidate_id: addressData.candidate_id,
                address_type: addressData.address_type, // enum
                address_line1: addressData.address_line1,
                address_line2: addressData.address_line2 ?? null,
                city: addressData.city,
                state: addressData.state ?? null,
                postal_code: addressData.postal_code,
                country: addressData.country,
                is_current: addressData.is_current ?? true,
            },
        });

        return newAddress;
    } catch (error) {
        console.error("Error adding candidate address:", error);
        throw error;
    }
};

export const createCandidateDocumentService = async ({ candidate_id, file_url, file_type, doc_type }) => {
    if (!candidate_id || !file_url || !file_type || !doc_type) {
        throw new Error("Missing required fields");
    }

    const newDocument = await prisma.document.create({
        data: {
            candidate_id,
            file_url,
            file_type,
            doc_type,
        },
    });

    return newDocument;
};

export const updateCandidateAddressService = async (addressId, updateData) => {
    if (!addressId) throw new Error("Address ID is required");
    if (!updateData || Object.keys(updateData).length === 0) {
        throw new Error("No data provided for update");
    }

    // ตรวจสอบว่ามี Address อยู่จริง
    const existingAddress = await prisma.address.findUnique({
        where: { address_id: addressId },
    });

    if (!existingAddress) throw new Error("Address not found");

    const updatedAddress = await prisma.address.update({
        where: { address_id: addressId },
        data: {
            address_type: updateData.address_type ?? existingAddress.address_type,
            address_line1: updateData.address_line1 ?? existingAddress.address_line1,
            address_line2: updateData.address_line2 ?? existingAddress.address_line2,
            city: updateData.city ?? existingAddress.city,
            state: updateData.state ?? existingAddress.state,
            postal_code: updateData.postal_code ?? existingAddress.postal_code,
            country: updateData.country ?? existingAddress.country,
            is_current: updateData.is_current ?? existingAddress.is_current,
        },
    });

    return updatedAddress;
};

export const deleteCandidateAddressService = async (addressId) => {
    if (!addressId) throw new Error("Address ID is required");

    // ตรวจสอบว่ามี Address อยู่จริง
    const existingAddress = await prisma.address.findUnique({
        where: { address_id: addressId },
    });

    if (!existingAddress) throw new Error("Address not found");

    const deletedAddress = await prisma.address.delete({
        where: { address_id: addressId },
    });

    return deletedAddress;
};

export const deleteCandidateDocumentService = async (documentId) => {
    // ตรวจสอบว่าเอกสารมีอยู่หรือไม่
    const existingDoc = await prisma.document.findUnique({
        where: { document_id: documentId },
    });

    if (!existingDoc) {
        throw new Error("Document not found");
    }

    // ลบเอกสาร
    const deletedDoc = await prisma.document.delete({
        where: { document_id: documentId },
    });

    return deletedDoc;
};


export const getCandidateDocumentsService = async (candidateId) => {
    // ตรวจสอบว่าผู้สมัครมีอยู่หรือไม่
    const candidate = await prisma.candidate.findUnique({
        where: { candidate_id: candidateId },
    });

    if (!candidate) {
        throw new Error("Candidate not found");
    }

    // ดึงเอกสารทั้งหมดของผู้สมัคร
    const documents = await prisma.document.findMany({
        where: { candidate_id: candidateId },
    });

    return documents;
};

export const getCandidateStatusService = async (candidateId) => {
    // ตรวจสอบว่าผู้สมัครมีอยู่หรือไม่
    const candidate = await prisma.candidate.findUnique({
        where: { candidate_id: candidateId },
    });

    if (!candidate) {
        throw new Error("Candidate not found");
    }

    // ดึงสถานะทั้งหมดของผู้สมัคร
    const statuses = await prisma.candidateStatus.findMany({
        where: { candidate_id: candidateId },
        orderBy: { created_at: 'desc' }, // เรียงล่าสุดก่อน
    });

    return statuses;
};

export const updateCandidateStatusService = async (candidateId, statusData) => {
    const { status, updatedBy } = statusData;

    const candidate = await prisma.candidate.findUnique({
        where: { candidate_id: candidateId },
    });

    if (!candidate) {
        throw new Error("Candidate not found");
    }

    const newStatus = await prisma.candidateStatus.create({
        data: {
            candidate_id: candidateId,
            status: status,
            updated_by: updatedBy || null,
        },
    });

    return newStatus;
};

export const requestUpdateCandidateStatusService = async (data) => {
    const { candidate_status_id, requested_status, request_by } = data;

    const existingStatus = await prisma.candidateStatus.findUnique({
        where: { candidate_status_id },
    });

    if (!existingStatus) {
        throw new Error("Candidate status not found");
    }

    const newRequest = await prisma.statusUpdateRequests.create({
        data: {
            candidate_status_id,
            requested_status,
            request_by: request_by || null,
        },
    });

    return newRequest;
};

export const approveCandidateStatusService = async (requestId, adminId) => {
    const request = await prisma.statusUpdateRequests.findUnique({
        where: { status_update_request_id: requestId },
    });

    if (!request) throw new Error("Status update request not found");
    if (request.status !== "pending") throw new Error("Request has already been processed");

    const updatedRequest = await prisma.statusUpdateRequests.update({
        where: { status_update_request_id: requestId },
        data: {
            status: "accepted",
            approve_by: adminId,
            approved_at: new Date(),
        },
    });

    // Update the candidate_status as well
    await prisma.candidateStatus.update({
        where: { candidate_status_id: request.candidate_status_id },
        data: { status: request.requested_status },
    });

    return updatedRequest;
};

export const rejectCandidateStatusService = async (requestId, adminId) => {
    const request = await prisma.statusUpdateRequests.findUnique({
        where: { status_update_request_id: requestId },
    });

    if (!request) throw new Error("Status update request not found");
    if (request.status !== "pending") throw new Error("Request has already been processed");

    const updatedRequest = await prisma.statusUpdateRequests.update({
        where: { status_update_request_id: requestId },
        data: {
            status: "rejected",
            approve_by: adminId,
            approved_at: new Date(),
        },
    });

    return updatedRequest;
};