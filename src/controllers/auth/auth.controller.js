// src/controllers/auth/auth.controller.js

import * as authService from "../../services/auth/auth.service.js";
import {registerSchema}  from "../../validation/zod.validation.js";

export const register = async (req, res, next) => {
  try {
    // 1. Validate Input
    const validatedData = registerSchema.parse(req.body);

    // 2. Call Service
    const newUser = await authService.registerService(validatedData);

    // 3. Response
    res.status(201).json({
      message: "Admin registered successfully",
      data: newUser,
    });

  } catch (error) {
    // ถ้าเป็น Error อีเมลซ้ำ ให้ส่ง 400 หรือ 409
    if (error.message === "Email already exists") {
      return res.status(409).json({ message: "อีเมลนี้ถูกใช้งานแล้ว" });
    }
    next(error); 
  }
};

// ✅ เพิ่มฟังก์ชัน Login
export const login = async (req, res, next) => {
  try {
    // req.body ผ่าน validateBody มาแล้ว
    const result = await authService.loginService(req.body);

    res.status(200).json({
      message: "Login successful",
      data: result, // ได้ token และ user info
    });

  } catch (error) {
    // ถ้า Login ไม่ผ่าน ให้ส่ง 401 Unauthorized
    if (error.message === "Invalid credentials") {
      return res.status(401).json({ message: "อีเมลหรือรหัสผ่านไม่ถูกต้อง" });
    }
    next(error);
  }
};