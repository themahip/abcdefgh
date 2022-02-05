import React, { useState } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
export default function Navbarafter() {
  const [menu, setMenu] = useState(true);
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
          <h1>Nirjal</h1>
          <p>
            <Link to="/ayurwiz/breakoutroom">BreakOut Rooms</Link>
          </p>
          <p>Questionnare</p>
          <p
            onClick={() => {
              setMenu(true);
            }}
          >
            <NavLink to="/login">Login | SignUp</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
