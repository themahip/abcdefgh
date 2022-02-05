import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Report(prop) {
  const [paratop, setParatop] = useState("");
  const [parabottom, setParabottom] = useState("");
  if (prop.score > 15) {
    setParatop(`
    
    Your results indicate that you may be experiencing symptoms of severe mental issues. Based on your answers, these symptoms seem to be greatly interfering with your relationships and the tasks of everyday life.
    
    These results do not mean that you have mental disorder, but it may be time to start a conversation with someone you trust to explore what is going on and how things can get better. If you are interested in learning more, and finding out the solution join Ayurwiz
    `);
    setParabottom(`
    This screen is not meant to be a formal diagnosis but is a good way to identify if mental health issues is possible problem. Having symptoms is different than having an mental disorder. A trained professional, such as a doctor or a mental health provider, can make this determination. Ayurwiz provides you the best professional you need to meet solving your problems.
    
    Your symptoms are often accompanied by several mental issues such as anxiety, depression, PTSD or maybe you are just an introvert having these issues since childhood.
    Let us confirm your status.
    `);
  } else if (prop.score < 15 && prop.score > 10) {
    setParatop(`
    
    Your results indicate that you may be experiencing symptoms of some mental issues. Based on your answers, these symptoms seem to be greatly interfering with your relationships and the tasks of everyday life.

These results do not mean that you have mental disorder, but it may be time to start a conversation with someone you trust to explore what is going on and how things can get better. If you are interested in learning more, and finding out the solution join Ayurwiz`);
    setParabottom(`
    This screen is not meant to be a formal diagnosis but is a good way to identify if mental health issues is possible problem. Having symptoms is different than having an mental disorder. A trained professional, such as a doctor or a mental health provider, can make this determination. Ayurwiz provides you the best professional you need to meet solving your problems.

Your symptoms are often accompanied by several mental issues such as anxiety, depression, PTSD or maybe you are just an introvert having these issues since childhood.
Let us confirm your status.
    `);
  } else {
    setParatop(`Your results indicate that you are mental status is Normal. Your score might have been affected due to your life style, sleeping and eating habits or any physical problems. Based on this result we might consider you mentally normal but if you are having certain issues that we didn't asked in this questionnaire, consider logging in and taking other tests.

    These results do not mean that you have mental disorder, but it may be time to start a conversation with someone you trust to explore what is going on and how things can get better. If you are interested in learning more, and finding out the solution join Ayurwiz`);
    setParabottom(`This screen is not meant to be a formal diagnosis but is a good way to identify if mental health issues is possible problem. Having symptoms is different than having an mental disorder. A trained professional, such as a doctor or a mental health provider, can make this determination. Ayurwiz provides you the best professional you need to meet solving your problems.
  `);
  }
  return (
    <div>
      <h1>Your Report</h1>

      <p>{paratop}</p>
      <Link to="/login">Join Atyurwiz</Link>
      <p>{parabottom}</p>
      <Link to="/login">Signup</Link>
    </div>
  );
}
