import React from "react";
import "./mainpage.css";
import { Parallax } from "react-parallax";
import logo from "../../../photo.jpg";
import Team from "./Team";
export default function Mainpage() {
  return (
    <div className="Mainpage">
      <div className="heading">
        <div>
          <h1>Ayurwiz</h1>
          <p>Revolution in the field of mental health</p>
        </div>
      </div>
      <div className="aboutus">
        <div className="aboutuscontent">
          <Parallax
            renderLayer={(offset) => (
              <h1 style={{ transform: `translatex(${offset * 100 - 30}%)` }}>
                ABOUT US
              </h1>
            )}
          />
          <p>
            Platform to share their problems. A portal to bring revolution to
            the mental health. By making a model to train to suggest medication
            for every mental disordered peoples.
          </p>
        </div>
      </div>
      <div className="ourmissions">
        <div className="ourmissionscontent">
          <Parallax
            renderLayer={(offset) => (
              <h1 style={{ transform: `translatex(${-offset * 100 + 100}%)` }}>
                OUR MISSIONS
              </h1>
            )}
          />
          <ul>
            <li>Platfo health. </li>
            <li>Platform to share their problems. </li>
            <li>Platfol disordered peoples.</li>
            <li>Plat disordered peoples.</li>
          </ul>
        </div>
      </div>
      <div className="ourteam">
        <div className="ourmissionscontent">
          <Parallax
            renderLayer={(offset) => (
              <h1 style={{ transform: `translatex(${offset * 100 - 50}%)` }}>
                OUR TEAM
              </h1>
            )}
          />
          <div className="mentor">
            <Team src={logo} name="Saugat Sing Saud" post="Mentor" />
          </div>
          <div className="teammember">
            <Team src={logo} name="Anurag Timalsina" post="Co-founder" />
            <Team src={logo} name="Mahip Aadhikari" post="Co-founder" />
            <Team src={logo} name="Nirjal Bhurtel" post="Co-founder" />
            <Team src={logo} name="Ranjan Lamsal" post="Co-founder" />
          </div>
        </div>
      </div>
      <div className="contactuspage">
        <div className="ourmissionscontent">
          <Parallax
            renderLayer={(offset) => (
              <h1 style={{ transform: `translatex(${-offset * 100 + 43}%)` }}>
                CONTACT US
              </h1>
            )}
          />
        </div>
      </div>
    </div>
  );
}
