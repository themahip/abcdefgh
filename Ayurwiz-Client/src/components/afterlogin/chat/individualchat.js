import React from "react";
import "./individualchat.css";
export default function Individualchat(prop) {
  return (
    <div className="Indchat">
      <div className="info">
        <div className="sender">{prop.sender}</div>
        <div className="date-time">{prop.time}</div>
      </div>
      <div className="message">{prop.message}</div>
    </div>
  );
}
