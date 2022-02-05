import axios from "axios";
import { Link,useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./dashboard.css";
export default function Dashboard() {
  const [name, setName] = useState("");
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

  return (
    <div className="Dashboardpage">
      <div className="center">
        <h1 className="greeting">Hello, {name}</h1>
        <p className="welcome">Welcome to Ayurwiz</p>
        <p className="theme">AI meets Mental health</p>
        <Link to="/ayurwiz/dailyquestions">
          Click here to store daily information
        </Link>
      </div>
    </div>
  );
}
