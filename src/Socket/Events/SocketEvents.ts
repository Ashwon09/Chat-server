// socketEvents.ts
import { Socket } from "socket.io";
import { searchRoom } from "../../Utils/uuid";

export const handleConnection = (socket: Socket) => {
  console.log(`A user connected: ${socket.id}`);

  socket.on(
    "join_room",
    (data: string, callback: (success: boolean) => void) => {
      const roomFound: boolean = searchRoom(data);
      if (roomFound) {
        socket.join(data);
        console.log(`User with id ${socket.id} joined the room:${data}`);
        callback(true);
      } else {
        console.log(
          `User ${socket.id} tried to join ${data} which does not exist`
        );
        callback(false);
      }
    }
  );

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log(`A user disconnected: ${socket.id}`);
  });
};
