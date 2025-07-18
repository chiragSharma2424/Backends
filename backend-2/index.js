import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
dotenv.config();
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        msg: "api is working"
    })
});

connectDB();

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});