import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connectDB = () => {
    mongoose.connect(`${process.env.MONGO_URI}/course`).then(() => {
        console.log("database connected");
    }).catch((err) => {
        console.log(`error in db connection ${err}`);
    })
}

export default connectDB;