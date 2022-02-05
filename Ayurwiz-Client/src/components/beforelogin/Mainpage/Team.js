import React from "react";
import "./team.css";

export default function Team(prop) {
  return (
    <div className="Team">
      <img src={prop.src} />
      <p className="name">
        {prop.name} <br/> {prop.post}
      </p>
    </div>
  );
}
