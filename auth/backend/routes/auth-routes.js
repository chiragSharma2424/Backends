import express from 'express';
const Router = express.Router();


import  { register }  from '../controllers/auth-controller.js';
import login from '../controllers/user-login.js';
import logout from '../controllers/user-logout.js';
import userAuth from '../middleware/userAuth.js';
import { sendVerifyOtp, verifyEmail } from '../controllers/email-verification.js';


Router.post('/register', register);
Router.post('/login', login);
Router.post('/logout', logout);
Router.post('/send-verify-otp', userAuth, sendVerifyOtp);
Router.post('/verify-account', userAuth, verifyEmail);

export default Router;