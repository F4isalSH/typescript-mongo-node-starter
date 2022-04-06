import express, { Application, Request, Response } from "express";
import "express-async-errors";
import { errorHandler, notFound } from "./middlewares";

const app: Application = express();
const port: number | string = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

//Error Handling
app.use(errorHandler);
app.use(notFound);

const start = async () => {
  try {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (err: any) {
    console.log(err);
  }
};

start();
