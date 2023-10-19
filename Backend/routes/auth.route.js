import express from "express";
import { auth, signin } from "../controllers/auth.controller.js";
const authRouter = express.Router();


authRouter.post('/signup', auth);
authRouter.post("/signin",signin);


export default authRouter;