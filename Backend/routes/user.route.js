import express from "express";
import { test } from "../controllers/user.controller.js";
const userRouter = express.Router();


userRouter.get('/', test);


export default userRouter;