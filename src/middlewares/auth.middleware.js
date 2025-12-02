import createHttpError from "http-errors";
import { verifyToken } from "../libs/jwt.lib.js";

export const authMiddleware = (req, res, next) => {
  console.log("Middleware is working ....")
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
     return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = verifyToken(token); // ใช้ Lib ที่สร้างไว้
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};
