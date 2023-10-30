import express from "express";
import { auth, signin , signout} from "../controllers/auth.controller.js";
const authRouter = express.Router();


authRouter.post('/signup', auth);
authRouter.post("/signin",signin);
authRouter.get("/signout",signout);


export default authRouter;