import adminModel from "../models/admin-model.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const signup = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        if(!firstName || !lastName || !email || !password) {
            return res.status(400).json({
                success: false,
                msg: "all fields are required"
            })
        }
    } catch(err) {
        console.log(`error in admin controller ${err}`);
        return res.status(500).json({
            success: false,
            msg: "internal server error"
        })
    }
}