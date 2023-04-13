import { dimensions, headerHeightMobile } from '@/styles'
import Image from 'next/image'
import styled from 'styled-components'

const Hero = () => {
  return (
    <HeroContainer>
      <Image
        style={{ objectFit: 'cover' }}
        fill
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
  object-fit: contain;
  overflow: hidden;
  justify-self: center;
  display: flex;

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
