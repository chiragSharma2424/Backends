import bcrypt from "bcryptjs";
import userModel from "../models/user-model";
import jwt from 'jsonwebtoken';


const login = async (req, res) => {
    const { email, passsword } = req.body;

    if(!email || !passsword) {
        return res.status(400).json({
            success: false,
            message: "email and password are required"
        })
    }

    try {
        const user = await userModel.findOne({email});

        if(!user) {
            return res.json({
                success: false,
                message: "user not found"
            })
        }

        const isMatch = await bcrypt.compare(passsword, user.password);

        if(!isMatch) {
            return res.json({
                success: false,
                message: "invalid password"
            })
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});

         res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });


        return res.status(200).json({
            success: true,
            message: "user logged in successfully"
        });
    } catch(err) {
        console.log("error in user login controller", err);
        return res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
}

export default login;