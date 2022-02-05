import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import Mainpage from "./components/beforelogin/Mainpage/Mainpage";
import Login from "./components/beforelogin/loginsignup/Login";
import Signup from "./components/beforelogin/loginsignup/Signup";
import SignupSurvey from "./components/beforelogin/aftersignupsurvey/SignupSurvey";
import Dashboard from "./components/afterlogin/Dashboard/Dashboard";
import Navbar from "./components/beforelogin/Navbar/Navbar";
import Navbarafter from "./components/afterlogin/navbar/navbar";
import { useEffect, useState } from "react";
import BreakOutRoom from "./components/afterlogin/chat/BreakoutroomPage";
import Chat from "./components/afterlogin/chat/chat";
import Questionarries from "./components/beforelogin/questionnaires/Questionarries";
import Dailyquestion from "./components/afterlogin/dailyquestion/Dailyquestion";
import Stats from "./components/afterlogin/stats/Stats";
function App() {
  const [route, setRoute] = useState(window.location.pathname);
  useEffect(() => {
    setRoute(window.location.pathname);
  });
  return (
    <div className="App">
      <Router>
        {route.includes("ayurwiz") ? <Navbarafter /> : <Navbar />}
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/signupsurvey" exact component={SignupSurvey} />
        <Route path="/question" exact component={Questionarries} />
        <Route path="/ayurwiz/dashboard" exact component={Dashboard} />
        <Route path="/ayurwiz/breakoutroom" exact component={BreakOutRoom} />
        <Route path="/ayurwiz/chat" exact component={Chat} />
        <Route path="/ayurwiz/dailyquestions" exact component = {Dailyquestion}/>
        <Route path = "/ayurwiz/stats" exact component={Stats}/>
        ;
        
        <Route path="/" exact component={Mainpage} />
      </Router>
    </div>
  );
}

export default App;
