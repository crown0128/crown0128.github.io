import React, { useState } from "react";
import styled from "styled-components";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import { ReactComponent as Wave2 } from "../wave2.svg";

export const PojectImg = [
  "https://www.dropbox.com/s/6z2u3f1ddokcq6e/proj5Sq.png?raw=1",
  "https://www.dropbox.com/s/w3lp9l8sf7l1r4h/proj2Sq.png?raw=1",
  "https://www.dropbox.com/s/agkcr4wings3y2q/proj4Sq.png?raw=1"
];

const Carousel = () => {
  const [images, setImages] = useState([PojectImg]);
  const [setIndex, currentIndex] = useState(
    Math.floor(Math.random() * Math.floor(2))
  );

  const nextSlide = () => {
    if (setIndex < 2) {
      currentIndex(setIndex + 1);
    } else {
      currentIndex(0);
    }
  };

  const prevSlide = () => {
    if (setIndex > 0) {
      currentIndex(setIndex - 1);
    }
  };

  const Container = styled.div`
    width: 80%;
    /* margin-top: 90vh; */
    height: 350px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    overflow: hidden;
    @media only screen and (max-width: 899px) and (min-width: 600px) {
      width: 65%;
    }
    @media only screen and (min-width: 900px) and (max-width: 1199px) {
      width: 70%;
    }
    @media only screen and (min-width: 1200px) {
      top: 60vh;
      height: 80vh;
      display: flex;
      justify-content: center;
    }
    &:hover .overlay_carousal {
      opacity: 1;
    }
  `;

  const Drip = styled(Wave2)`
    width: 100vw;
    height: auto;
    position: absolute;
    left: 8px;
    right: 0;
    top: 80vh;
    bottom: 0;
    transition: top;
    z-index: -5;
    @media only screen and (max-width: 899px) and (min-width: 600px) {
      top: 25%;
    }
    @media only screen and (min-width: 900px) and (max-width: 1199px) {
      top: 30%;
      left: -1px;
    }
    @media only screen and (min-width: 1200px) {
      top: 60vh;
    }
  `;

  const H2 = styled.div`
    position: absolute;
    top: 120vh;
    font-size: 3.5vw;
    left: 35vw;
    font-weight: bold;
    font-family: "Bungee Hairline", cursive;
  `;

  return (
    <>
      <H2>Featured Projects</H2>
      <div className="carousel_wrapper">
        <Drip />
        <AwesomeButton
          type="secondary"
          onPress={prevSlide}
          className="right_arrow">
          <i class="fas fa-chevron-left" />
        </AwesomeButton>
        {images.map((list, index) => (
          <Container>
            <Cards key={index} index={setIndex} images={list} />
            <button>
              <Link to="/projects">View More</Link>
            </button>
          </Container>
        ))}
        <AwesomeButton
          type="secondary"
          onPress={nextSlide}
          className="left_arrow">
          <i class="fas fa-chevron-right" />
        </AwesomeButton>
      </div>
    </>
  );
};

export default Carousel;
