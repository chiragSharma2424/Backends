import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        msg: "api is working"
    })
});

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});