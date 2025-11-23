import pkg from "@prisma/client";
const { Prisma } = pkg;

import createHttpError from "http-errors";

export const prismaErrorMiddleware = (err, req, res, next) => {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
        console.log("🔥 PRISMA ERROR:", err);

        switch (err.code) {
            case "P2002": {
                const target = err.meta?.target;
                const detail = Array.isArray(target)
                    ? target.join(", ")
                    : target.split("_").join(" ");
                return next(createHttpError.Conflict(`Duplicate value for ${detail}`));
            }

            case "P2025":
                return next(createHttpError.NotFound("Record not found"));

            default:
                return next(createHttpError.InternalServerError("Database error"));
        }
    }

    return next(err);
};
