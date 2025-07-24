import userModel from "../models/user-model.js";

export const getUserData = async (req, res) => {
    try {
        const userId = req.userId; 

        const user = await userModel.findById(userId);

        if (!user) {
            return res.json({
                success: false,
                msg: "User not found"
            });
        }

        return res.json({
            success: true,
            userData: {
                name: user.name,
                email: user.email,
                isAccountVerified: user.isAccountVerified
            }
        });
    } catch (err) {
        console.log("Error in user details", err);
        return res.json({
            success: false,
            msg: "Internal server error"
        });
    }
};
