import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const userAuth = async (req, res, next) => {
    const { token } = req.cookies;

    if(!token) {
        return res.json({
            success: false,
            msg: "not authorized login again"
        })
    }


    try {
        // now decode the token
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if(tokenDecode.id) {
            req.body.userId = tokenDecode.id
        } else {
            return res.json({
                success: false,
                msg: "not authorized login again"
            })
        }

        next();
    } catch(err) {
        console.log("error in middleware", err);
        return res.json({
            success: false,
            msg: "not authorized"
        })
    }
}