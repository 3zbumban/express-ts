import app from "./app";
import { createServer } from "http";
import { config } from "dotenv";

const configuration = config();
console.log(configuration.parsed);

const PORT = process.env.PORT;

const server = createServer(app);

server.listen(PORT, () => {
    console.log(`[i] running on http://localhost:${PORT}`);
});
