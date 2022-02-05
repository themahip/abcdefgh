import React from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./loginsignup.css";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [err, setError] = useState("");
  function postData(e) {
    e.preventDefault();
  
    axios.post("/login", { email, password })
      .then((res) => {
        if (res.data!=="") {
          setError(res.data);
        } else {
          console.log("done");
          history.push("/ayurwiz/dashboard");
        }
      });
  }

  return (
    <div className="LoginSignup">
    
      <h1>Login</h1>
      
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <p style={{ color: "red" }} className="error">
        {err}
      </p>
      <button className="submit" onClick={postData}>
        Login
      </button>
      <p>
        If you haven't signup yet <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}
