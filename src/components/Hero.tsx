import styled from "styled-components";
import dimensions from "styles/dimensions";
import heroImage from "images/sketch.jpg";
import { headerHeightMobile, z } from "styles/constants";

const Hero = () => {
  return (
    <HeroContainer>
      <ObjectFitImage src="/images/final-color-02-layers.jpg" alt="hero" />
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  padding-top: ${headerHeightMobile};
  height: 50rem;

  @media (min-width: ${dimensions.tablet}px) {
    height: 60rem;
    padding-top: 0rem;
  }
`;

export const ObjectFitImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center center;

  @media (min-width: ${dimensions.tablet}px) {
    object-position: left top;
  }
`;
