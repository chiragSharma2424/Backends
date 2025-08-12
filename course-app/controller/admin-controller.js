import adminModel from "../models/admin-model.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const login = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        if(!fullName || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            })
        };

        const existingUser = await adminModel.findOne({email});

        if(existingUser) {
            return res.status(400).json({
                message: "admin already exists"
            });
        }

        const newAdmin = await adminModel.create({
            fullName: fullName,
            email: email,
            password: password
        });

        const token = jwt.sign({fullName, email}, process.env.JWT_SECRET, {expiresIn: '1h'});

        return res.status(200).json({
            message: "admin created successfully",
            token: token,
            admin: newAdmin
        });
    } catch(err) {
        console.log(`error in admin controller ${err}`);
    }
}