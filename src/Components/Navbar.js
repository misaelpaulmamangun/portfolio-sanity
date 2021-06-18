import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [check, setCheck] = useState(false);

  function onClickHandle() {
    setCheck((prevCheck) => !prevCheck);
  }

  let toggleClass = check ? "navbar-list active" : "navbar-list";

  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <div className="branding">
            <NavLink to="/" exact>
              Misael Paul
            </NavLink>
          </div>
          <span className="toggle-button" onClick={onClickHandle}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </span>
          <div className="nav-links">
            <ul className={toggleClass}>
              <li className="navbar-item">
                <NavLink className="navbar-link" to="/about">
                  About Me
                </NavLink>
              </li>
              <li className="navbar-item">
                <NavLink className="navbar-link" to="/projects">
                  Projects
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
