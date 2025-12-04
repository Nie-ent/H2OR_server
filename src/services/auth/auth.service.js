// src/services/auth/auth.service.js

import { compareHash, hashString } from "../../libs/hash.lib.js";
import prisma from "../../config/prisma-client.config.js";
import createHttpError from "http-errors";
import { signToken, verifyToken } from "../../libs/jwt.lib.js";

export const registerService = async (data) => {

  console.log('data', data)
  // 1. เช็คว่ามีอีเมลนี้ในระบบหรือยัง
  const existingUser = await prisma.adminUser.findUnique({
    where: { username: data.username },
  });

  if (existingUser) {
    throw new createHttpError("username already exists");
  }

  // 2. เข้ารหัสรหัสผ่าน (Hashing)
  const hashedPassword = await hashString(data.password);

  // 3. สร้าง User ใหม่ใน DB
  const newUser = await prisma.adminUser.create({
    data: {
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      email: data.email,
      password_hash: hashedPassword, // เก็บตัวที่ hash แล้ว
      role: data.role, // default role
    },
    // เลือก return เฉพาะฟิลด์ที่ปลอดภัย (ไม่ส่ง password กลับ)
    select: {
      admin_user_id: true,
      firstName: true,
      lastName: true,
      username: true,
      email: true,
      role: true,
    }
  });

  return newUser;
};

// ✅ เพิ่มฟังก์ชัน Login
export const loginService = async (data) => {
  // 1. ค้นหา User
  const user = await prisma.adminUser.findUnique({
    where: { username: data.username },
  });
  // ถ้าไม่เจอ User ให้โยน Error (ใช้ข้อความกลางๆ เพื่อความปลอดภัย)
  if (!user) {
    throw new createHttpError("Invalid credentials");
  }

  // 2. ตรวจสอบรหัสผ่าน
  const isPasswordValid = await compareHash(user.password_hash, data.password);
  if (!isPasswordValid) {
    throw new createHttpError("Invalid credentials");
  }

  // 3. สร้าง JWT Token (บัตรผ่าน)
  const token = signToken(
    {
      id: user.admin_user_id,
      role: user.role,
      username: user.username
    },
  );
  // ส่งกลับทั้ง Token และข้อมูล User (ไม่รวม password)
  return {
    token,
    user: {
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      email: user.email,
    }
  };
};

export const getMeService = async (userId) => {
  const user = await prisma.adminUser.findUnique({
    where: { admin_user_id: userId },
    select: {
      admin_user_id: true,
      firstName: true,
      lastName: true,
      email: true,
      role: true,
      created_at: true,
    },
  });

  if (!user) throw createHttpError("User not found");

  return user;

};