import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userModel from '../models/user-model.js';
import dotenv from 'dotenv';
import transporter from '../config/nodemailer.js';
dotenv.config();

export const register = async (req, res) => {
    const {name, email, password} = req.body;

    if(!name || !email || !password) {
        return res.status(400).json({
            success: false,
            message: "all fields are required"
        })
    }

    try {
        const userAlreadyExists = await userModel.findOne({email});

        if(userAlreadyExists) {
            return res.status(400).json({
                success: false,
                message: "user already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new userModel({name, email, password: hashedPassword});
        await newUser.save();


        // generating token
        const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: '7d'});

        // added token in cookie
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        
        // sending welcome email
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: "Welcome to Chirag's company",
            text: `Welcome to chirag's website. Your account has been created with email id: ${email}`
        }

        await transporter.sendMail(mailOptions);

        // actually we can also send user in respone
        return res.status(200).json({
            success: true,
            message: "user register successfully",
            user: newUser
        });

    } catch(err) {
        console.log("error in register controller", err);
        return res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
}

// now we have to implement the email functionality