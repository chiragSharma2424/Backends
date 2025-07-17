import express from 'express';
import { getAllUser, login, userController } from '../controllers/user-controller.js';
const Router = express.Router();

Router.post('/register', userController);
Router.post('/login', login);
Router.get('/getusers', getAllUser);

export default Router;