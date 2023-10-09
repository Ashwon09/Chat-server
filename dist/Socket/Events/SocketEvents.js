"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleConnection = void 0;
const uuid_1 = require("../../Utils/uuid");
const handleConnection = (socket) => {
    console.log(`A user connected: ${socket.id}`);
    socket.on("join_room", (data, callback) => {
        const roomFound = (0, uuid_1.searchRoom)(data);
        if (roomFound) {
            socket.join(data);
            console.log(`User with id ${socket.id} joined the room:${data}`);
            callback(true);
        }
        else {
            console.log(`User ${socket.id} tried to join ${data} which does not exist`);
            callback(false);
        }
    });
    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
    });
    socket.on("disconnect", () => {
        console.log(`A user disconnected: ${socket.id}`);
    });
};
exports.handleConnection = handleConnection;
