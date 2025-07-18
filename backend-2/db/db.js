import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

function connectDB() {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log('database connected');
    }).catch((err) => {
        console.log('error in database connection', err);
    })
}

export default connectDB;