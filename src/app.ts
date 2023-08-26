import "express-async-errors";
import express, { Application } from "express";
import middlewares from "./middlewares";
import { moviesRouter } from "./routers";

const app: Application = express();
app.use(express.json());

app.use("/movies", moviesRouter);
app.use(middlewares.handleErrors);

export default app;
