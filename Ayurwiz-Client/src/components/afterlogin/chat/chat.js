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
  const user = name;
  const room = "123";
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
      console.log(data.name);

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
  }, []);

  useEffect(() => {
    socket.emit("joinRoom", room);
  }, []);
  async function sendData() {
    const data = [
      {
        message: message,
        sender: user,
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
  }

  useEffect(() => {
    socket.on("recieveMessage", (data) => {
      console.log(data);
    });
  }, [socket]);

  return (
    <div className="chatroom">
      <h1 className="Title">Break Out Room</h1>
      <div className="chats">
        <Individualchat
          sender="Nirjal"
          time="2021-12-3 11:12"
          message="djklf jlakjf aklsdj lkasdj lkdsaj flkadsjf lkasdjf"
        />
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
