import express, { Express, NextFunction, Request, Response } from "express";
import sequelize from "./database/sequelize";
import bodyParser from "body-parser";
import routes from "./app/routes/index";
import AppError from "./utils/app.Error";

const app: Express = express();
const porta: Number = 3030;

app.use(bodyParser.json());

app.use("/api/v1", routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World Express + TypeScript");
});

app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(err.getHttpCode()).send(err.tostring());
});

app.listen(porta, () => {
  console.log(`Este app está funcionando através da porta ${porta}`);
});

sequelize();
