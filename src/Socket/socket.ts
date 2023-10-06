// socket.ts
import { Server } from "socket.io";
import http from "http";
import { handleConnection } from "./Events/SocketEvents";

export const initSocket = (server: http.Server) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    handleConnection(socket);
  });

  return io;
};
