import React from "react";
import axios from "axios";
import {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import "./loginsignup.css";

export default function Signup() {
const [name,setName]=useState("");
const [email, setEmail]=useState("");
const [password,setPassword]=useState("");
const [cpassword,setCpassword]=useState("");
const history= useHistory();
const [err, setError]=useState("");
function postData(e){
  e.preventDefault();
  axios.post("http://localhost:5000/signup",{name,email,password,cpassword})
  .then((res)=>{
   if(res.data!==""){
     setError(res.data);
   }
   else{
     console.log("done");
     history.push("/signupsurvey");
   }
  })

}
return (
    <div className="LoginSignup">
      <h1>Signup</h1>
      <input type="text" placeholder="Fullname"   onChange={(e)=>{
          setName(e.target.value);
        }}/>
      <input type="text" placeholder="Email"
        onChange={(e)=>{
          setEmail(e.target.value);
        }} />
      <input type="password" placeholder="Password" 
        onChange={(e)=>{
          setPassword(e.target.value);
        }} />
      <input type="password" placeholder="Confirm Password"
        onChange={(e)=>{
          setCpassword(e.target.value);
        }} />
      <p style={{ color: "red" }} className="error" onClick={postData}>
     {err}
      </p>
     
      <button className="submit" onClick={postData}>Signup</button>
      <p>
        Already registered? <Link to="/login">login</Link>
      </p>
    </div>
  );
}
