async function logout(req, res) {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict'
        });

        return res.status(200).json({
            success: true,
            message: "logout successfully"
        });

    } catch(err) {
        console.log("error in logout controller", err);
        return res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
}

export default logout;