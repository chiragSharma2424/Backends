import express from 'express';
import { login } from '../controller/admin-controller.js';
const adminRouter = express.Router();

adminRouter.post('/login', login);

export default adminRouter;