const signup = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        if(! firstName || !lastName || email || password) {
            return res.status(400).json({
                msg: "all fields are required"
            })
        }
    } catch(err) {
        console.log(`error in signup controller ${err}`);
        return res.status(500).json({
            success: false,
            msg: "internal server error"
        })
    }
};


export {
    signup
}