import express from 'express';
import dotenv from 'dotenv';
const app = express();

// here we dont have to give path of .env because it was present in root directory
dotenv.config();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        msg: "api is working"
    });
});

app.listen(port, () => {
    console.log(`server is started on port ${port}`);
});