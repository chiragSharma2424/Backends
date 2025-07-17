import express from 'express';
import { deleteUser, getAllUser, login, userController } from '../controllers/user-controller.js';
const Router = express.Router();

Router.post('/register', userController);
Router.post('/login', login);
Router.get('/getusers', getAllUser);
Router.delete('/delete/:id', deleteUser);

export default Router;