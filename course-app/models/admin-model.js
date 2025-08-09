import mongoose from "mongoose";

const amdinSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true, trim: true, lowercase: true},
    password: {type: String, required: true}
}, {timestamps: true});

const adminModel = mongoose.model('admin', amdinSchema);

export default adminModel;