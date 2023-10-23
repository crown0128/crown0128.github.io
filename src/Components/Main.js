import React, { useState } from "react";
import { ReactComponent as Wave } from "../Wave.svg";
import { DefaultNav } from "../Components/sidebar/Nav";
import Projects from "../Projects/Projects";
import Skills from "./Skills";
import logo from "../img/taty-logo.png";
import computer from "../img/drip-computer.png";

const Main = () => {
  const [move, setMove] = useState(0);
  document.addEventListener("scroll", () => {
    setMove(window.scrollY);
  });

  const toTop = move > 600 ? "1" : "0";

  // const Drip = styled(Wave)`
  //   /* top: ${move >= 500 ? "-120vh" : ""}; */
  //   /* @media only screen and (max-width: 899px) and (min-width: 600px) {
  //     top: ${move >= 100 ? "-120vh" : ""};
  //   }
  //   @media only screen and (min-width: 900px) and (max-width: 1199px) {
  //     width: 70%;
  //   }
  //   @media only screen and (min-width: 1200px) {
  //   } */
  // `;

  const backToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <div className="mainWrapper">
      <Wave
        styles={`top:${move >= 500 ? "-120vh" : ""}`}
        className={`wave ${move > 600 ? "fixed" : ""}`}
      />
      <div className="header">
        <div className="navWrapper">
          <DefaultNav move={move} />
        </div>
        <div className="about-header">
          <div className="headerImg" />
          <div className="info">
            <h1>MAX BRANDT</h1>
            <h2>Full-stack Developer</h2>
          </div>
        </div>
      </div>
      <h3 id="about" className="aboutText">
        <span className="about-title">About Me</span>
        <br />
        <div className="border">
          <div></div>
        </div>
        I am a passonated Full-Stack Developer. I am proficient in JS stacks as
        front-end and node.js as back-end. I always fllow the cutting-edg
        technologies with strong passon.
        <br/>
        <div style={{textAlign:"center"}}>- strive to win -</div>
        
      </h3>
      <Skills />
      <Projects />
      <div style={{ opacity: toTop }} className="toTop">
        <i onClick={backToTop} className="fas fa-chevron-circle-up" />
      </div>
    </div>
  );
};

export default Main;
