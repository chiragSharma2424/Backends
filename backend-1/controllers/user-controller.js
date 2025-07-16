import userModel from "../models/user-model.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


export const userController = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if(!name || !email || !password) {
            return res.status(400).json({
                msg: "All fields are required"
            });
        }

        // check if user already exists in database or not
        const existingUser = await userModel.findOne({email});
        if(existingUser) {
            return res.status(400).json({
                msg: "user already exists in database"
            })
        };

        const newUser = await userModel.create({
            name: name,
            email: email,
            password: password
        });

        return res.status(200).json({
            msg: "user created  successfully",
            user: newUser
        });
    } catch(err) {
        console.log(`error in user controller`, err);
        res.status(500).json({
            msg: "Internal server error"
        })
    }
}


// this is our login controller we have to take email, password in body and genrate a toke for it
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password) {
            return res.status(400).json({
                msg: "email and password are required"
            });
        }

        // have to check if user exist
        const existingUser = userModel.findOne({email});
        if(!existingUser) {
            return res.status(400).json({
                msg: "invalid credentials"
            })
        }

        // now generate a token
        const token = jwt.sign({email, password}, process.env.JWT_SECRET);

        return res.status(200).json({
            msg: "user log in",
            token: token
        });

    } catch(err) {
        console.log("error in controller", err);
        return res.status(500).json({
            msg: "internal server error"
        })
    }
}