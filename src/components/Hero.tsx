import React from "react";
import styled from "@emotion/styled";
import HeroImage from "images/sketch.jpg";
import dimensions from "styles/dimensions";
import heroImage from "images/sketch.jpg";
import { headerHeightMobile, z } from "styles/constants";

const Hero = () => {
  return (
    <HeroContainer>
      <img src="/images/sketch.jpg" alt="hero" />
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  margin-top: ${headerHeightMobile};

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }

  @media (min-width: ${dimensions.tablet}px) {
    margin-top: 0rem;
  }
`;
