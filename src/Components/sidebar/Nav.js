import React from "react";
// import styled from "styled-components";
import { Link } from "react-router-dom";

export const DefaultNav = props => {
  // const Nav = styled.div`
  //   top: ${props.move >= 450 ? "40vh" : ""};
  // `;

  return (
    <nav className={`nav ${props.move >= 400 ? "fixed" : ""}`}>
      <ul>
        <a href="#about">
          <li>About</li>
        </a>
        <a href="#skills">
          <li>Skills</li>
        </a>
        <a href="#projects">
          <li>Projects</li>
        </a>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export const NavContact = () => {
  return (
    <nav className="nav ContactNav">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        {/* <a href="#skills">
          <li>Skills</li>
        </a>
        <Link to="/projects">
          <li>Projects</li>
        </Link>
        <a href="#about">
          <li>About</li>
        </a>
        <Link to="/contact">
          <li>Contact</li>
        </Link> */}
      </ul>
    </nav>
  );
};
