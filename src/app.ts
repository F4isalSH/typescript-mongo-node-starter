import express, { Application, Request, Response } from "express";

const app: Application = express();
const port: number | string = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});
