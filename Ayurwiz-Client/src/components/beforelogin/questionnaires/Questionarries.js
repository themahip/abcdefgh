import React from "react";
import Individualquestion from "./individualquestion";
import "./individualquestion.css";
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
  return (
    <div className="Questionpage">
      <h1 className="header">Questions</h1>
      <div className="questions">
        {question.map((prop, id) => (
          <Individualquestion
            id={id + 1}
            question={prop.question}
            option1={prop.option1}
            option2={prop.option2}
            option3={prop.option3}
            option4={prop.option4}
          />
        ))}
      </div>
      <button className="submitbtn">Submit</button>
    </div>
  );
}
