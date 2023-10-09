"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSocket = void 0;
// socket.ts
const socket_io_1 = require("socket.io");
const SocketEvents_1 = require("./Events/SocketEvents");
const initSocket = (server) => {
    const io = new socket_io_1.Server(server, {
        cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"],
        },
    });
    io.on("connection", (socket) => {
        (0, SocketEvents_1.handleConnection)(socket);
    });
    return io;
};
exports.initSocket = initSocket;
