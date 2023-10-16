import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();

//connecting server
const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log("Server Is running on port 3000!!");
});

//connecting database
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("CONNECTED DATABASE");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

//middleware

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
