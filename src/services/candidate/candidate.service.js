import prisma from "../../config/prisma-client.config.js"

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

export const applyResumeService = async (firstName, lastName, email, phone, gender, age, stack, expectedSalary) => {
    try {
        const newCandidate = await prisma.candidate.create({
            data: {
                first_name: firstName,
                last_name: lastName,
                email,
                phone,
                gender,
                age,
                stack,
                expected_salary: expectedSalary,
            },
        });

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
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            phone: data.phone,
            gender: data.gender,
            age: data.age,
            stack: data.stack,
            expected_salary: data.expected_salary,
        }
    });
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