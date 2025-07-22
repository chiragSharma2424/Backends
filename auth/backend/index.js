import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { connectDB } from './database/db.js';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

// credentials true for cokkie, to send cookie
app.use(cors({ credentials: true }));


app.get('/', (req, res) => {
    return res.status(200).json({
        success: true,
        msg: "api is working"
    })
});

connectDB();

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
})