import express from 'express';
import { userController } from '../controllers/user-controller.js';
const Router = express.Router();

Router.post('/register', userController);

export default Router;