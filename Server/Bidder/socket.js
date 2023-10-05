import axios from "axios";

const roomTimers = new Map();

const bidderNamespaceLogic = (bidderNameSpace) => {
  bidderNameSpace.on("connection", (socket) => {
    socket.on("userJoined", async (roomId) => {
      try {
        socket.join(roomId);
        await axios.post("http://localhost:5000/api/auctionroom/bidderJoined", {
          auctionRoomId: roomId,
        });
        bidderNameSpace.to(roomId).emit("infoChange");
      } catch (error) {
        console.error("Error making API request:", error);
      }
    });
    socket.on("pushNotifications", ({ bidders, roomId }) => {
      socket.broadcast.emit("recieveNotifications", { bidders, roomId });
      if (!roomTimers.has(roomId)) {
        roomTimers.set(roomId, 300); // Initial timer value (200 seconds)
      }

      const countdown = setInterval(async () => {
        const timerValue = roomTimers.get(roomId);

        if (timerValue <= 0) {
          clearInterval(countdown);
        } else {
          roomTimers.set(roomId, timerValue - 1);
          const updatedTimerValue = roomTimers.get(roomId);

          if (updatedTimerValue <= 0) {
            const res = await axios.post(
              "http://localhost:5000/api/auctionroom/endRoom",
              {
                roomId: roomId,
              }
            );
            bidderNameSpace.to(roomId).emit("endAuctionRoom", res.data.Message);
            clearInterval(countdown);
          } else {
            // Convert the timer value to minutes and seconds format
            const minutes = Math.floor(updatedTimerValue / 60);
            const seconds = updatedTimerValue % 60;
            const timeFormat = `${minutes}:${
              seconds < 10 ? "0" : ""
            }${seconds}`;

            bidderNameSpace.to(roomId).emit("updateTimer", timeFormat);
          }
        }
      }, 1000);
    });
    socket.on("userLeftRoom", async () => {
      try {
        await axios.post("http://localhost:5000/api/auctionroom/bidderLeft", {
          auctionRoomId: "650b6d27dc7bc72649ab09bc",
        });
        bidderNameSpace.to("650b6d27dc7bc72649ab09bc").emit("infoChange");
      } catch (error) {
        console.error("Error making API request:", error);
      }
    });
    socket.on("updateRoom", (roomId) => {
      roomTimers.set(roomId, 30);
      bidderNameSpace.to(roomId).emit("infoChange");
    });
  });
};

export default bidderNamespaceLogic;
