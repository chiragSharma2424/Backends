import userModel from "../models/user-model.js";
import dotenv from 'dotenv';
dotenv.config();

export const login = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if(!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            })
        }

        // find method array return krta h
        const existingUser = await userModel.findOne({email})
        if(existingUser) {
            return res.status(400).json({
                message: "User already exists",
                user: existingUser
            })
        }

        // if user not existing then create a user
        const newUser = await userModel.create({
            name: name,
            email: email,
            password: password
        });

        return res.status(200).json({
            message: "User created successfully",
            user: newUser
        });
    } catch(err) {
        console.log(`error in login controller ${err}`);
    }
}

export const signin = async (req, res) => {
    try {
        const {email, password} = req.body;

        if(!email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }
        
    } catch(err) {
        console.log(`error in signin controller ${err}`);
    }
}