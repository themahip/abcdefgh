import React from "react";
import "./individualquestion.css";
import { useState } from "react";
export default function Individualquestion(prop) {
  const [answer, setAnswer] = useState(0);
  if(answer == 0){
    
  }

  return (
    <div className="indiquestion">
      <p className="questiononly">{prop.id + ". " + prop.question}</p>
      <div className="options">
        <button
          onClick={() => {
            setAnswer(1);
            console.log(answer);
          }}
        >
          {prop.option1}
        </button>
        <button
          onClick={() => {
            setAnswer(2);
            console.log(answer);
          }}
        >
          {prop.option2}
        </button>
        <button
          onClick={() => {
            setAnswer(3);
            console.log(answer);
          }}
        >
          {prop.option3}
        </button>
        <button
          onClick={() => {
            setAnswer(4);
            console.log(answer);
          }}
        >
          {prop.option4}
        </button>
      </div>
    </div>
  );
}
