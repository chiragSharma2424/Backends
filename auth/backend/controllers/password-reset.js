import transporter from "../config/nodemailer";
import userModel from "../models/user-model.js";
import dotenv from 'dotenv';
dotenv.config();

async function sendResetOtp(req, res) {
    try {
        const {email} = req.body;

        if(!email) {
            return res.json({
                success: false,
                msg: "email is required"
            })
        }

        const user = await userModel.findOne({email});

        if(!user) {
            return res.json({
                success: false,
                msg: "user not found"
            })
        }

        // if user available h tw opt genrate kr do

        const otp = String(Math.floor(100000 + Math.random() * 900000));

        user.resetOtp = otp;
        user.resetOtpExpireAt = Date.now() + 15 * 60 * 1000;
        user.save();

        const mailOptions = {
            from: process.env.SENDER_MAIL,
            to: user.email,
            subject: 'Password reset OTP',
            test: `Your OTP for password reset is ${otp}. Use this otp to reset your password`
        }

        transporter.sendMail(mailOptions);

        return res.json({
            success: true,
            msg: "otp send to your email"
        });

    } catch(err) {
        console.log("error in password reset", err);
        return res.json({
            success: false,
            msg: "internal server error"
        })
    }
}





// reset user password
async function resetPassword(req, res) {
    try {
        const { email, otp, newPassword } = req.body;

        if(!email || !otp || !newPassword) {
            return res.json({
                success: false,
                msg: "all fields are required"
            })
        }

        const user = userModel.findOne({email});

        if(!user) {
            
        }
    } catch(err) {
        console.log("error in reset password");
        return res.json({
            success: false,
            msg: "internal server error"
        })
    }
}