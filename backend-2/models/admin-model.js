import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true, trim: true, lowercase: true},
    password: {type: String, required: true}
}, {timestamps: true});

const adminModel = mongoose.model("admin", adminSchema);

export default adminModel;