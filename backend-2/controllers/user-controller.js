import userModel from "../models/user-model.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const signup = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        if(! firstName || !lastName || !email || !password) {
            return res.status(400).json({
                msg: "all fields are required"
            })
        }

        const existingUser = await userModel.findOne({email});

        if(existingUser) {
            return res.status(200).json({
                success: false,
                msg: "user already exists"
            })
        }

        const newUser = await userModel.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        });

        return res.status(200).json({
            success: true,
            msg: "user created successfully",
            user: newUser
        });

    } catch(err) {
        console.log(`error in signup controller ${err}`);
        return res.status(500).json({
            success: false,
            msg: "internal server error"
        })
    }
};


// login controller, jo email and pass lega and genrates a jwt token
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if(!email || !password) {
            return res.status(400).json({
                success: false,
                msg: "all fields are required"
            });
        }

        const user = userModel.findOne({ email });
        if(!user) {
            return res.status(400).json({
                success: false,
                msg: "user not found"
            })
        }

        const token = jwt.sign({ email, password }, process.env.JWT_USER_SECRET);

        return res.status(200).json({
            success: true,
            msg: "user login successfully",
            token: token
        });
        
    } catch(err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            msg: "internal server error"
        })
    }
}

export {
    signup,
    login
}