// src/services/auth/auth.service.js

import argon2 from "argon2";
import prisma from "../../config/prisma-client.config.js";

export const registerService = async (data) => {
  // 1. เช็คว่ามีอีเมลนี้ในระบบหรือยัง
  const existingUser = await prisma.adminUser.findUnique({
    where: { email: data.email },
  });

  if (existingUser) {
    throw new Error("Email already exists"); // ส่ง Error ไปให้ Controller
  }

  // 2. เข้ารหัสรหัสผ่าน (Hashing)
  const hashedPassword = await argon2.hash(data.password);

  // 3. สร้าง User ใหม่ใน DB
  const newUser = await prisma.adminUser.create({
    data: {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password_hash: hashedPassword, // เก็บตัวที่ hash แล้ว
      role: "admin", // default role
    },
    // เลือก return เฉพาะฟิลด์ที่ปลอดภัย (ไม่ส่ง password กลับ)
    select: {
      admin_user_id: true,
      first_name: true,
      last_name: true,
      email: true,
      role: admin,
      created_at: true
    }
  });

  return newUser;
};