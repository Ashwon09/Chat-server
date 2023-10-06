// src/app.ts
import express, { Request, Response } from "express";
import http from "http";
import { router } from "./Routes/index";
const cors = require("cors");
import { initSocket } from "./Socket/socket"; // Import the initSocket function

const app = express();
app.use(cors());

const server = http.createServer(app);

// Initialize io and pass the server instance
const io = initSocket(server);

const port = 3001;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Express!");
});

app.use("/", router);

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
