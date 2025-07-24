import userModel from '../models/user-model.js';
import transporter from '../config/nodemailer.js';

export const sendVerifyOtp = async (req, res) => {
    try {
        const { userId } = req.body;

        const user = await userModel.findById(userId);

        if(user.isAccountVerified) {
            return res.json({
                success: false,
                message: "Account already verified"
            })
        }

        // generates a 6 didit number
        const otp = String(Math.floor(100000 + Math.random() * 900000));

        user.verifyOtp = otp;
        user.verifyOtpExpireAt = Date.now() + 24 * 60 * 60;
        await user.save();

        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: "Account verification otp",
            text: `Your OTP is ${otp}. Verify your account using this otp`
        }

        await transporter.sendMail(mailOptions);

        return res.json({
            success: true,
            message: "verification otp is sent to email"
        });

    } catch(err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
}


// user id token se milege or token cookie me hoga


export const verifyEmail = async (req, res) => {
    const {userId, otp} = req.body;

    if(!userId || !otp) {
        return res.status(400).json({
            success: false,
            message: "missing details"
        })
    }


    try {
        // user ko database me find kro
        const user = await userModel.findById(userId);

        // agar user exists nhi krta tw
        if(!user) {
            return res.status(500).json({
                success: false,
                 message: "user not found"
            })
        }

        
        // ab database me vreifyotp field ko check kro kya wo equal h ya nhi otp k
        if(user.verifyOtp === ' ' || user.verifyOtp !== otp) {
            return res.status(400).json({
                success: false,
                message: "invalid OTP"
            })
        }


        if(user.verifyOtpExpireAt < Date.now()) {
            return res.json({
                success: false,
                message: "OTP expired"
            })
        }


        // ab user ka account verify kro we have to make isverified property true
        user.isAccountVerified = true;
        user.verifyOtp = ' ';
        user.verifyOtpExpireAt = 0;
        
        await user.save();

        
        return res.status(200).json({
            success: true,
            message: "email verify successfully"
        })

    } catch(err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
}