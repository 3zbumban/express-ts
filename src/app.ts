import express from "express";
import cors from "cors";
import morgan from "morgan";
// import { config } from "dotenv";

import v1Api from "./routes/v1Api";

const app = express();

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use("/v1", v1Api);

export default app;
