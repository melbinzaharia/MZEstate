import express from "express";
import { auth } from "../controllers/auth.controller.js";
const authRouter = express.Router();


authRouter.post('/signup', auth);


export default authRouter;