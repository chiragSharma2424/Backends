import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;


// write function which connects to db for now we are using mongoDB compass
function connectsToDB() {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("database connected")
    }).catch((err) => {
        console.log(`error in database connection ${err}`)
    })
}




// writing model for user
const userSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true, lowercase: true, trim: true},
    password: {type: String, required: true}
}, {timestamps: true})

const User = mongoose.model("user", userSchema);



// testing endpoint
app.get('/', (req, res) => {
   return res.status(200).json({
      message: "api endpoint is working"
   })
});




// function call jo database connect krega
connectsToDB();
app.listen(port, () => {
    console.log(`server started on ${port}`);
});
