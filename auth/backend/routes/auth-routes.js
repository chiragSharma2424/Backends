import express from 'express';
const Router = express.Router();


import  register  from '../controllers/auth-controller.js';
import login from '../controllers/user-login.js';
import logout from '../controllers/user-logout.js';


Router.post('/register', register);
Router.post('/login', login);
Router.post('/logout', logout);

export default Router;