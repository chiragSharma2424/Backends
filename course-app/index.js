import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT;


app.get('/', (req, res) => {
    return res.json({
        msg: "api is working"
    })
});


app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
});