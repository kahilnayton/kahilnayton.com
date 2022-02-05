import Image from "next/image";
import styled from "styled-components";
import { headerHeightMobile } from "styles/constants";
import dimensions from "styles/dimensions";

const Hero = () => {
  return (
    <HeroContainer>
      <Image
        layout="fill"
        objectFit="cover"
        src="/images/final-color-02-layers.jpg"
        alt="hero"
      />
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  padding-top: ${headerHeightMobile};
  height: 500px;
  position: relative;

  @media (min-width: ${dimensions.tablet}px) {
    height: 600px;
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
