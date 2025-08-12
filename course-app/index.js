import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import userRouter from './routes/user-routes.js';
import adminRouter from './routes/admin-routes.js';
dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());


// global routes of user
app.use('/api/v1/user', userRouter);

// global routes of admin
app.use('/api/v1/admin', adminRouter);

app.get('/', (req, res) => {
    return res.json({
        msg: "api is working"
    })
});



connectDB();
app.listen(port, () => {
    console.log(`server started on http://localhost:${port}`);
});