import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()


//connecting server

const app = express();

app.listen(3000,() => {
    console.log("Server Is running on port 3000!!")
})


//connceting database

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("database connected");
}).catch((err)=>{
    console.log(err);
})