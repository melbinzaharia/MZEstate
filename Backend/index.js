import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

//connecting server
const app = express();
app.listen(3000,() => {
    console.log("Server Is running on port 3000!!")
})

//connecting database
mongoose.connect("mongodb+srv://melbinzacharia:Melbin24.!@cluster0.zsftp0a.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("CONNECTED DATABASE");
}).catch((err)=>{
    console.log(err);
})
