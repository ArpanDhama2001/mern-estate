import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";

dotenv.config();
mongoose
  .connect(process.env.MONGOOSE)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err));

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

app.use("/api/user", userRouter);
