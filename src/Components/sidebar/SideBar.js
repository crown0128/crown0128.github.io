import React, { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import styled from 'styled-components'
import purpleDrip from '../../img/star-drip.png'

export const background = {
  blue: 'https://www.dropbox.com/s/nvm4oy3y07a7abw/wave-dark.png?raw=1',
  purple: `${purpleDrip}`
}

const SideBar = () => {

  const [toggle, setToggle] = useState(false);
  const [bkgChange, setBkgChange] = useState();
  const [bgColor, setbgColor] = useState(background.purple)

  const [move, setMove] = useState(0);
  document.addEventListener("scroll", () => {
    setMove(window.scrollY);
  });

  const SideBarClsd = styled.div`
  opacity: 1;
  @media only screen and (min-width: 600px){
    opacity: ${move > 700 ? "1" : "0"}
  }
  @media only screen and (max-width: 599px){
    opacity: ${move > 300 ? "1" : "0"}
  }
`;


  document.body.style.backgroundImage = `url(${bgColor})`;

  if (bgColor === background.blue){
    document.body.style.backgroundColor = "black";
  } else {document.body.style.backgroundColor = "white";}
  

  return (
    <SideBarClsd className={`sidebar ${!toggle ? "closed" : ""}`}>
      <button
      size='icon'
        type="primary"
        className="sidebar_bttn"
        onClick={e => setToggle(!toggle)}
      >
          {!toggle ? (
            <i className="fas fa-angle-double-right" />
          ) : (
            <i className="fas fa-times exit"></i>
          )}
      </button>

      <div className="profileImg" />
      <h3>Max Brandt</h3>
      <h3>Full-Stack Developer</h3>
      <span className="location"> 
        <i className="fas fa-map-marker-alt"> Burgdorf, Germany</i>
      </span>
      <ul>
        <li>
          <a href='https://github.com/crown0128' target='_blank'>
          <i className="fab fa-github" />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/tatyana-novell-b0168bb1' target='_blank'>
          <i className="fab fa-linkedin" />
          </a>
        </li>
      </ul>
      <nav className='side-nav'>
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
        {/* <Link to="/contact">
          <li>Contact</li>
        </Link> */}
      </ul>
    </nav>
    </SideBarClsd>
  );
};

export default SideBar;
