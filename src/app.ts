import express, { Application, Request, Response } from "express";
import "express-async-errors";
import { errorHandler, notFound } from "./middlewares";
import { connectDB } from "./database/connect";
require("dotenv").config();

const app: Application = express();
const port = process.env.PORT!;
const url = process.env.MONGO_URI!;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

//Error Handling
app.use(errorHandler);
app.use(notFound);

const start = async () => {
  try {
    await connectDB(url);
    console.log("Connect to DB...");
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (err: any) {
    console.log(err);
  }
};

start();
