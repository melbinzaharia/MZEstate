import User from "../models/user.js"
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";


export const auth = async (req, res ,next) => {
    const {username , email , password}= req.body;
    const hashedPassword = bcrypt.hashSync(password,10)
    const newUser = new User({ username, email, password:hashedPassword});
    try {
        await newUser.save();
        res.status(201).json("User Created successfully");
    } catch(error) {
        next(error);
    }
  };