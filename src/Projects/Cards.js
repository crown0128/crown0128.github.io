import React, { useState } from "react";
import styled from "styled-components";

const Cards = ({ images, index }) => {
  const Card = styled.div`
    background-image: url(${images[index]});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-content: center;
    height: 300px;
    width: 50vw;
    padding: 30vw;
    transform: translateX(0px);
    transition: transform ease-out 0.45s;
    color: white;
    margin-top: 5%;
    @media only screen and (min-width: 1200px) {
      height: 80vh;
      width: 50vw;
    }
  `;

  return (
    <Card className="fade">
      <h3 className="overlay_carousal">Project Info Here</h3>
    </Card>
  );
};

export default Cards;
