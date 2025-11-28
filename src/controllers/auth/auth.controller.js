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