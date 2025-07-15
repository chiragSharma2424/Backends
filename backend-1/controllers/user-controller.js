import userModel from "../models/user-model.js";

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

export const login = async (req, res) => {
    try {

    } catch(err) {
        console.log("error in controller", err);
        return res.status(500).json({
            msg: "internal server error"
        })
    }
}