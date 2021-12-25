import "reflect-metadata";
import express, { json } from "express";

import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3002, () => console.log("Server is running..."));
