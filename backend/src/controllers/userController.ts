import {Request, Response} from "express";
import UserModel from "../models/user";
import bcrypt from "bcrypt";
import { IUser } from "../types/user";
import jwt from "jsonwebtoken";

export const signup = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            res.status(400).json({ message: "Name, email and password are required" });
            return;
        }

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            res.status(409).json({ message: "Email already in use" });
            return;
        }

        if (typeof password !== "string" || password.length < 6) {
            res.status(400).json({ message: "Password must be at least 6 characters" });
            return;
        }


        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new UserModel({
            name,
            email,
            password: hashedPassword,
        });

        await user.save();

        const userObj: IUser = user.toObject();
        delete userObj.password;

        res.status(201).json({ message: "User created", user: userObj });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


export const signin = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ message: "Email and password are required" });
            return;
        }

        const user = await UserModel.findOne({ email });
        if (!user) {
            res.status(401).json({ message: "Invalid credentials, Your not found" });
            return;
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(401).json({ message: "Invalid credentials" });
            return;
        }

        const secret = process.env.JWT_SECRET;
        if (!secret) {
            console.error("JWT_SECRET is not set");
            res.status(500).json({ message: "Internal server error" });
            return;
        }

        const token = jwt.sign(
            { id: user._id?.toString(), email: user.email },
            secret,
            { expiresIn: "1h" }
        );

        const userObj: IUser = user.toObject();
        delete userObj.password;

        res.status(200).json({ message: "Signin successful", token, user: userObj });

    } catch (error) {
        console.error("Signin error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

