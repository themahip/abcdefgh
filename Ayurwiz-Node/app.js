const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const Msg= require("./models/chatschema");
require("dotenv").config({ path: "./config.env" });
URL =
  "mongodb+srv://papyrus123:papyrus123@cluster0.czjsl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(URL);


app.use(
  cors({
    origin: "http://localhost:3000", // 8000 is where we have set our create-react-app to run
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
const PORT = 5000 || process.env.PORT;

app.use("/", require("./routes/get"));
app.use("/", require("./routes/user"));
app.use("/", require("./routes/question"));

const server = app.listen(PORT, () => {
  console.log(`the app is running on port ${PORT}`);
});

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    method: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`connection is done ${socket.id}`);
  let room="123";
  socket.on("joinRoom", (data) => {

    const chat= new Msg({
     room
    });
    chat.save();
    socket.join(data);
    room = data;
    console.log(`connected to room ${data}`);
  });
  socket.on("sendMessage", (data) => {
    const chat =new Msg({
      chat:data
    });
    chat.save();
    console.log("data sent");
    io.to(room).emit("recieveMessage", data);
    console.log("data emited");
  });
  socket.on("disconnect", () => {
    console.log("Disconnected");
  });
});
