import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = () => {
    mongoose.connect(`${process.env.MONGO_URI}/auth`).then(() => {
        console.log("database connected successfully")
    }).catch((err) => {
        console.log("error in connection to database", err);
    })
}