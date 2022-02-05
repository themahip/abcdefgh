import React from "react";
import { useHistory } from "react-router-dom";
import {useState, useEffect} from "react";

import "./breakoutroom.css";
export default function BreakOutRoom() {
  const history = useHistory();
  const [name, setName] = useState("");
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



  function breakoutroomStart(e) {
    e.preventDefault();

    history.push("/ayurwiz/chat");
  }
  return (
    <div className="Chat">
      <div className="center">
        <h1 className="greeting">hello {name} Greetings to Breekout Room</h1>
        <p className="welcome">Please Click Here to Start your chat !</p>
        <button onClick={breakoutroomStart}>Start A BreakOutRoom</button>
      </div>
    </div>
  );
}
