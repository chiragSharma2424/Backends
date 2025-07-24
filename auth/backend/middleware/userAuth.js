import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const userAuth = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({
            success: false,
            msg: "Not authorized. Please log in again.",
        });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if (tokenDecode?.id) {
            req.userId = tokenDecode.id;
            next();
        } else {
            return res.status(401).json({
                success: false,
                msg: "Invalid token. Login again.",
            });
        }
    } catch (err) {
        console.log("error in middleware", err);
        return res.status(401).json({
            success: false,
            msg: "Authorization failed",
        });
    }
};

export default userAuth;