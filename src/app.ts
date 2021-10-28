import express from "express";
import cors from "cors";
import morgan from "morgan";
import { config } from "dotenv";
import { createServer } from "http";

import v1Api from "./routes/v1Api";

const configuration = config();
const PORT = process.env.PORT;

console.log(configuration.parsed);

const app = express();
const server = createServer(app);


app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

app.use("/v1", v1Api);

server.listen(PORT, () => {
    console.log(`[i] running on http://localhost:${PORT}`);
});
