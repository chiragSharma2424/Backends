
// check user is authenticated
async function isAuhtenticated (req, res) {
    try{ 

    } catch(err) {
        console.log("error in authenticated controller", err);
        return res.status(500).json({
            success: false,
            msg: "internal server error"
        })
    }
}

export default isAuhtenticated;