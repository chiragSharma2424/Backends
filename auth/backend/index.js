import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));


app.get('/', (req, res) => {
    return res.status(200).json({
        success: true,
        msg: "api is working"
    })
})

app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
})