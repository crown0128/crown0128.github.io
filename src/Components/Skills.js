import React, { useState } from "react";
// import { Css, Html, Js, Less } from "./blob2";
import css from "../img/css2.png";
import JS from "../img/js2.png";
import html from "../img/html2.png";
import LESS from "../img/less2.png";
import Ps from "../img/ps2.png";
import ReactJs from "../img/reactjs2.png";
import styled from "styled-components";

const Skills = () => {
  const [move, setMove] = useState(0);
  document.addEventListener("scroll", () => {
    setMove(window.scrollY);
  });
    
  const mobile = move > 650 ? "1" : "";
  const mobileMid = move > 700 ? "1" : "";
  const mobileBttm = move > 750 ? "1" : "";
  const scrollingTop = move > 1500 ? "1" : "";
  const scrollingMid = move > 1600 ? "1" : "";
  const scrollingBttm = move > 1800 ? "1" : "";

  const Img = styled.img`
    opacity: ${scrollingTop};
    @media only screen and (max-width: 599px) {
      opacity: ${mobile};
    }
    @media only screen and (min-width: 1200px){
      opacity: ${move > 1700 ? "1" : "0"}
    }
  `;

  const ImgMid = styled.img`
    opacity: ${scrollingMid};
    @media only screen and (max-width: 599px) {
      opacity: ${mobileMid};
    }
    @media only screen and (min-width: 1200px){
      opacity: ${move > 2000 ? "1" : "0"}
    }
  `;

  const ImgBttm = styled.img`
    opacity: ${scrollingBttm};
    @media only screen and (max-width: 599px) {
      opacity: ${mobileBttm};
    }
    @media only screen and (min-width: 1200px){
      opacity: ${move > 2300 ? "1" : "0"}
    }
  `;

  return (
    <div id="skills" className="skills">
      <div className="skills_header">
        <h2>Skills</h2>
      </div>
      <div className='blobWrapper'>
        <Img className="skills_blob css" src={css} alt="css" />
        <Img className="skills_blob html" src={html} alt="html" />
        <Img className="skills_blob js" src={JS} alt="javascript" />
        <Img className="skills_blob less" src={LESS} alt="Less" />
        <Img className="skills_blob ps" src={Ps} alt="Photoshop" />
        <Img className="skills_blob react" src={ReactJs} alt="React JS" />
      </div>
    </div>
  );
};

export default Skills;
