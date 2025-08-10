import express from 'express';
import { login } from '../controller/admin-controller.js';
const adminRouter = express.Router();

adminRouter.post('/admin', login);

export default adminRouter;