import express from "express";
import todoRoute from "./routes/todo.route";
import bodyParser from "body-parser";
import morgan from "morgan";
import * as dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(todoRoute);

export default app;
