import Image from 'next/image'
import styled from 'styled-components'
import { headerHeightMobile, dimensions } from '@/styles'

const Hero = () => {
  return (
    <HeroContainer>
      <Image
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        src="/images/final-color-02-layers.jpg"
        alt="hero"
      />
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  padding-top: ${headerHeightMobile};
  height: 500px;
  position: relative;

  @media (min-width: ${dimensions.tablet}px) {
    height: 700px;
    padding-top: 0rem;
  }
`

export const ObjectFitImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center center;

  @media (min-width: ${dimensions.tablet}px) {
    object-position: left top;
  }
`