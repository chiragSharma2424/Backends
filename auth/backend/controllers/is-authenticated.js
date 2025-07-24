
// check user is authenticated
async function isAuhtenticated (req, res) {
    try{ 
        return res.status(200).json({
            success: true,
            msg: "user is authenticated"
        })
    } catch(err) {
        console.log("error in authenticated controller", err);
        return res.status(500).json({
            success: false,
            msg: "internal server error"
        })
    }
}

export default isAuhtenticated;