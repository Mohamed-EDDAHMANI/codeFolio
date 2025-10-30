import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config } from '../config/index.js';

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function comparePassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export function signToken(payload: object, expiresIn = '7d') {
  const secret = config.jwtSecret || process.env.JWT_SECRET;
  if (!secret) throw new Error('JWT secret is not set');
  return jwt.sign(payload, secret, { expiresIn });
}

export function verifyToken(token: string) {
  const secret = config.jwtSecret || process.env.JWT_SECRET;
  if (!secret) throw new Error('JWT secret is not set');
  return jwt.verify(token, secret) as any;
}

export default {
  hashPassword,
  comparePassword,
  signToken,
  verifyToken,
};
