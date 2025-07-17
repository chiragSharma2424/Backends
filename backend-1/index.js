import express from 'express';
import dotenv from 'dotenv';
import Router from './routes/user-routes.js';
import { connectDB } from './datbase/db.js';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors({
    origin: '*'
}));

// here we dont have to give path of .env because it was present in root directory
dotenv.config();
const port = process.env.PORT;


app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        msg: "api is working"
    });
});


// this request will go to routes folder to the main router and diffrent controllers will executed
app.use('/api/v1/user', Router);


// connectDB function h jo database connect krega jb index file run hogi
connectDB();

app.listen(port, () => {
    console.log(`server is started on port ${port}`);
});