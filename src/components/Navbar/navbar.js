import React from "react";
import logo from "../../logo.svg";
import "./navbar.scss";

export default () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tours logo" />
      <ul className="nav-links">
        <li>
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="nav-link" href="/about">
            About
          </a>
        </li>
        <li>
          <a className="nav-link" href="/tours">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
};
