import jwt from 'jsonwebtoken';
// import { env } from '../config/env.config.js';
import dotenv from 'dotenv';

dotenv.config();


export function signToken(payload, options = {}) {
    return jwt.sign(payload, process.env.SECRET_KEY, {
        algorithm: 'HS256',
        expiresIn: process.env.JWT_EXPIRES_IN,
        ...options,
    });
}

export function verifyToken(token) {
    return jwt.verify(token, process.env.SECRET_KEY);
}
