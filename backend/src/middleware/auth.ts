import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"


export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization || req.headers.Authorization
    const token = typeof authHeader === "string" && authHeader.startsWith("Bearer ")
        ? authHeader.split(" ")[1]
        : null

    if (!token) {
        res.status(401).json({ message: "No token provided" });
        return
    }

    try {
        const secret = process.env.JWT_SECRET || "your_jwt_secret"
        const decoded = jwt.verify(token, secret) as { [key: string]: any }
        (req as any).user = decoded

        next()
    } catch (err) {
        res.status(401).json({ message: "Invalid or expired token" })
        return
    }
}