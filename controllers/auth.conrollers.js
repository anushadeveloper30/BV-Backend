import bcrypt from 'bcrypt';
import User from "../models/user.models.js";
import { generateAccessToken } from '../utils/jwt.js';

// Signup Api
export const signup = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) return res.status(400).json({
        success: false,
        message: "All feilds are required"
    });

    try {
        const user = await User.findOne({ email });
        if (user) return res.status(400).json({
            success: false,
            message: "user already exits"
        });

        await User.create({ firstName, lastName, email, password });

        res.status(201).json({
            success: true,
            message: "Registration Successfull"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Internal Server Error"
        });
        console.log(error);
    }
}

// Login Api 
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({
            success: false,
            message: "Invalid Email Or Password"
        });

        const user = await User.findOne({ email });

        if (!user) return res.status(400).json({
            success: false,
            message: "Invalid Email Or Password"
        });

        const isTruePassword = await bcrypt.compare(password, user.password);

        if (!isTruePassword) return res.status(400).json({
            success: false,
            message: "Invalid Email Or Password"
        });

        const accessToken = generateAccessToken(user);

        res.cookie("XntricToken", accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: process.env.NODE_ENV === "production" ? "None" : "lax",
        });

        res.status(200).json({
            success: true,
            message: "Login Successfull",
            accessToken,
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

// logout Api
export const logOut = async (req, res) => {
    try {
        await res.clearCookie("XntricToken");
        res.status(200).json({
            success: true,
            message: "Logout Successfull"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: "Internal Server Error"
        });
    };
};