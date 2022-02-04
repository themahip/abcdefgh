import React, { useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  const [menu, setMenu] = useState(true);
  const of=() => {
    setMenu(true);
  }
  return (
    <div className="Navbar">
      <div className="Header">
        <p className="name">
          <Link to="/">Ayurwiz</Link>
        </p>
        <div
          className="burger"
          onClick={() => {
            if (menu) {
              setMenu(false);
            } else {
              setMenu(true);
            }
          }}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className={menu ? "Menu" : "MenuActive Menu"}>
        <div
          style={{ display: `${menu ? "none" : "flex"}` }}
          className="menuOptions"
        >
          <h1>Ayurwiz</h1>
          <p onClick={of}>Our Services</p>
          <p onClick={of}>Councelling</p>
          <p onClick={of}>Confession</p>
          <p onClick={of}>BreakOut Rooms</p>
          <p onClick={of}>
            <Link to="/question">Questionnare</Link>
          </p>
          <p
            onClick={of}
          >
            <NavLink to="/login">Login | SignUp</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
