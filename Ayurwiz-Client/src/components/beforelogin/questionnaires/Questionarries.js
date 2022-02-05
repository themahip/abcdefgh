import React from "react";
import "./individualquestion.css";
import { useState } from "react";
import Report from "./Report";
export default function () {
  const question = [
    {
      question: "NIrjla is my name and here is my",
      option1: "depressed",
      option2: "not depressed",
      option3: "hererer",
      option4: "jaldksj kl",
    },
    {
      question: "NIrjla is my name and here is my",
      option1: "depressed",
      option2: "not depressed",
      option3: "hererer",
      option4: "jaldksj kl",
    },
    {
      question: "NIrjla is my name and here is my",
      option1: "depressed",
      option2: "not depressed",
      option3: "hererer",
      option4: "jaldksj kl",
    },
    {
      question: "NIrjla is my name and here is my",
      option1: "depressed",
      option2: "not depressed",
      option3: "hererer",
      option4: "jaldksj kl",
    },
    {
      question: "NIrjla is my name and here is my",
      option1: "depressed",
      option2: "not depressed",
      option3: "hererer",
      option4: "jaldksj kl",
    },
  ];
  const [score, setScore] = useState(0);
  let score1;
  const [submitted, setSubmitted] = useState(false);
  function submit() {
    score1 = score;
    console.log(score1)
  }

  return (
    <div className="Questionpage">
      <h1 className="header">Questions</h1>
      <div className="questions">
        {question.map((prop, id) => {
          let option = [prop.option1, prop.option2, prop.option3, prop.option4];
          const [answer, setAnswer] = useState(0);
          function classname(object) {
            if (object === `option${answer}`) {
              return "black";
            } else {
              return "normal";
            }
          }
          return (
            <div className="indiquestion">
              <p className="questiononly">{prop.id + ". " + prop.question}</p>
              <div className="options">
                {option.map((opt, key) => (
                  <button
                    className={classname(`option${key + 1}`)}
                    onClick={() => {
                      setAnswer(key + 1);
                      setScore((sc) => sc + key + 1);
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <button className="submitbtn" onClick={submit}>
        Submit
      </button>
        {submitted?<Report/>:<div/>}
    </div>
  );
}
