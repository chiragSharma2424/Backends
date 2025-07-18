import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import userRouter from './routes/user-routes.js';
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        msg: "api is working"
    })
});


// all routes, all user routes are handled by user router
app.use('/api/v1/users', userRouter);


// a function jo database connect krega
connectDB();


app.listen(port, () => {
    console.log(`server started on port ${port}`);
});