import { PrismaClient, Prisma } from "../../generated/prisma/index.js";

const prisma = new PrismaClient();

export { prisma, Prisma };
