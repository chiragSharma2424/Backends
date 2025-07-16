import express from 'express';
import { login, userController } from '../controllers/user-controller.js';
const Router = express.Router();

Router.post('/register', userController);
Router.post('/login', login);

export default Router;