import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { io } from "socket.io-client";
import "./chat.css";
import Individualchat from "./individualchat";
const socket = io("http://localhost:5000");
function Chat() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [allmessage, setAllmessage] = useState([]);
  const user = name;
  const history = useHistory();
  const callDash = async () => {
    try {
      const res = await fetch("/ayurwiz/dashboard", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      setName(data.name);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log("error");
      history.push("/login");
    }
  };

  useEffect(() => {
    callDash();
    socket.emit("joinRoom", "123");
  }, []);

  async function sendData() {
    const data = [
      {
        message: message,
        sender: user,
        room: "123",
        date:
          new Date(Date.now()).getFullYear() +
          "-" +
          new Date(Date.now()).getMonth() +
          "-" +
          new Date(Date.now()).getDate() +
          " " +
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes() +
          ":" +
          new Date(Date.now()).getSeconds(),
      },
    ];
    await socket.emit("sendMessage", data);
    setAllmessage((allmessage) => [...allmessage, data]);
  }

  useEffect(() => {
    socket.on("recieveMessage", (data) => {
      console.log(data);
      setAllmessage((allmessage) => [...allmessage, data]);
    });
  }, [socket]);

  return (
    <div className="chatroom">
      <h1 className="Title">Break Out Room</h1>
      <div className="chats">
        {allmessage.map((msg) => {
          return (
            <Individualchat
              sender={msg[0].sender}
              time={msg[0].time}
              message={msg[0].message}
            />
          );
        })}
      </div>

      <div className="textarea">
        <textarea
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
        <button onClick={sendData}>send</button>
      </div>
    </div>
  );
}

export default Chat;
