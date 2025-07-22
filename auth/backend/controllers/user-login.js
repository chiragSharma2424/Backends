const login = async (req, res) => {
    const { email, passsword } = req.body;

    if(!email || !passsword) {
        return res.status(400).json({
            success: false,
            message: "email and password are required"
        })
    }

    try {

    } catch(err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
}