
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

let secret = process.env.JWT_SECRET ?? '';

export interface AuthRequest extends Request {
    user?: string | object;
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).send({ error: 'Not authorized to access this resource' });
    }

    try {
        const data = jwt.verify(token, secret);
        req.user = data;
        next();
    } catch (error) {
        return res.status(403).send({ error: 'Not authorized to access this resource' });
    }
};