import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import pkg from "@prisma/client";
import dotenv from "dotenv";
dotenv.config();

const { PrismaClient } = pkg;

// สร้าง adapter พร้อม config database
const adapter = new PrismaMariaDb({
    host: process.env.DATABASE_HOST,
    port: 3306, // default MySQL port
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    connectionLimit: 10 // ปรับจำนวน connection pool ได้
});

const prisma = new PrismaClient({
    adapter
});

export default prisma;
