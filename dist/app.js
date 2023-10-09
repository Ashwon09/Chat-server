"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const index_1 = require("./Routes/index");
const cors = require("cors");
const socket_1 = require("./Socket/socket"); // Import the initSocket function
const app = (0, express_1.default)();
app.use(cors());
const server = http_1.default.createServer(app);
// Initialize io and pass the server instance
const io = (0, socket_1.initSocket)(server);
const port = 3001;
app.get("/", (req, res) => {
    res.send("Hello, Express!");
});
app.use("/", index_1.router);
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
