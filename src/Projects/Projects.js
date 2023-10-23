import React from "react";
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial
} from "react-awesome-button";
import styles from "../webBttn.scss";
import proj4 from '../img/Breweriessq.png';
import proj5 from '../img/cheftopia.png';
import proj1 from '../img/nasasq.png';
import proj6 from '../img/wedding.png';
import VanillaTilt from 'vanilla-tilt';

const Projects = () => {
  // const proj1 = "https://www.dropbox.com/s/6z2u3f1ddokcq6e/proj5Sq.png?raw=1";
  const proj2 = "https://www.dropbox.com/s/w3lp9l8sf7l1r4h/proj2Sq.png?raw=1";
  const proj3 = "https://www.dropbox.com/s/agkcr4wings3y2q/proj4Sq.png?raw=1";
  const projLink = "https://relaxed-stallman-2387d1.netlify.com"

  const border = (
    <div className='border-projects'><div></div></div>
  )

  VanillaTilt.init(document.querySelectorAll(".boxes2"), {
    max:20,
    speed: 300,
    reverse: true
  })


  return (
    <div id="projects" className="projects">
      {/* <NavContact /> */}
      {/* <Drip /> */}
      <div className="wrapper_projects">
        <h1>Projects</h1>
        <div className="projectBoxes">
          <div data-tilt data-tilt-axis="x" className="boxes2">
            <img src={`${proj1}`} alt="Project 1" />
            <div className="proj-desc">
              <h3>Nasa Photo of the Day</h3>
              {border}
              <p>Click through the Nasa APOD API for<br/> their photo/video of the day</p>
              <div className='bttn-wrap'>
                <AwesomeButtonSocial
                  className="socialBttn"
                  size="icon"
                  type="github"
                  href="https://codesandbox.io/s/nasa-apod-bthu5"
                  target='_blank'
                />
                <AwesomeButton
                  className="socialBttn"
                  size="icon"
                  type="secondary"
                  href='https://csb-bthu5.netlify.com/'
                  target="_blank"
                >
                  <i className="fas fa-globe" />
                </AwesomeButton>
              </div>
            </div>
          </div>
          <div data-tilt data-tilt-axis="x" className="boxes2">
            <img src={`${proj2}`} alt="Project 2" />
            <div className="proj-desc">
              <h3>Resume</h3>
              {border}
              <p>Created a resume template with HTML/CSS</p>
              <div className='bttn-wrap'>
                <AwesomeButtonSocial
                  className="socialBttn"
                  size="icon"
                  type="github"
                  href='https://github.com/crown0128'
                  target='_blank'
                />
                <AwesomeButton
                  className="socialBttn"
                  size="icon"
                  type="secondary"
                  href='https://taty2010.github.io/Preprocessing-I/'
                  target='_blank'
                >
                  <i className="fas fa-globe" />
                </AwesomeButton>
              </div>
            </div>
          </div>
          <div data-tilt data-tilt-axis="x" className="boxes2">
            <img src={`${proj3}`} alt="Project 3" />
            <div className="proj-desc">
              <h3>Art Portfolio</h3>
              {border}
              <p>Landing Page for website where artists<br/> can share their work</p>
              <div className='bttn-wrap'>
                <AwesomeButtonSocial
                  className="socialBttn"
                  size="icon"
                  type="github"
                  href='https://github.com/Team-Art/Splash_Page'
                  target='_blank'
                />
                <AwesomeButton
                  className="socialBttn"
                  size="icon"
                  type="secondary"
                  href='https://team-art.github.io/Splash_Page'
                  target='_blank'
                >
                  <i className="fas fa-globe" />
                </AwesomeButton>
              </div>
            </div>
          </div>
          <div data-tilt data-tilt-axis="x" className="boxes2">
            <img src={`${proj4}`} alt="Project 1" />
            <div className="proj-desc">
              <h3>Explore Breweries</h3>
              {border}
              <p>Page created with the Brewery APi that allows <br/>user's to search for breweries  </p>
              <div className='bttn-wrap'>
                <AwesomeButtonSocial
                  className="socialBttn"
                  size="icon"
                  type="github"
                  href='https://github.com/taty2010/React-Redux-App/tree/tatyana-novell'
                  target='_blank'
                />
                <AwesomeButton
                  className="socialBttn"
                  size="icon"
                  type="secondary"
                  href='https://csb-0myoe.netlify.com/'
                  target='_blank'
                >
                  <i className="fas fa-globe" />
                </AwesomeButton>
              </div>
            </div>
          </div>
          <div data-tilt data-tilt-axis="x" className="boxes2">
            <img src={`${proj5}`} alt="Project 2" />
            <div className="proj-desc">
              <h3>Cheftopia</h3>
              {border}
              <p>Website where Chefs can post and share their recipe's</p>
              <div className='bttn-wrap'>
                <AwesomeButtonSocial
                  className="socialBttn"
                  size="icon"
                  type="github"
                  href='https://github.com/Chef-Portfolio3/Front-end'
                  target='_blank'
                />
                <AwesomeButton
                  className="socialBttn"
                  size="icon"
                  type="secondary"
                  href='https://fervent-bose-6a1f1a.netlify.com/'
                  target='_blank'
                >
                  <i className="fas fa-globe" />
                </AwesomeButton>
              </div>
            </div>
          </div>
          <div data-tilt data-tilt-axis="x" className="boxes2">
            <img src={`${proj6}`} alt="Project 3" />
            <div className="proj-desc">
              <h3>Wedding Portfolio</h3>
              {border}
              <p>Portfolio website created for wedding planner's to post their <br/>work and gain new clients.</p>
              <div className='bttn-wrap'>
                <AwesomeButtonSocial
                  className="socialBttn"
                  size="icon"
                  type="github"
                  href='https://github.com/crown0128'
                  target='_blank'
                />
                <AwesomeButton
                  className="socialBttn"
                  size="icon"
                  type="secondary"
                  href='https://angry-nightingale-5ebd83.netlify.com/'
                  target='_blank'
                >
                  <i className="fas fa-globe" />
                </AwesomeButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
