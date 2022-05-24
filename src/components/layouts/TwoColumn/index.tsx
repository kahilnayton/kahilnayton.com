import {
  CardImageContainer,
  Column,
  Container,
  ElevatedBox,
  ElevationWrapper,
  Img,
  Inner,
  VStack,
} from '@/styles'
// @ts-ignore
import Fade from 'react-reveal/Fade'

type TwoColumnProps = {
  reverse?: boolean
  id?: string
  title?: string
  description?: string
  link?: string
  linkLable?: string
  imageSrc?: string
  body?: any
}

export default function TwoColumns({
  reverse = true,
  id,
  title,
  imageSrc,
  description,
  link,
  linkLable,
}: TwoColumnProps) {
  return (
    <Fade bottom>
      <Inner id={id}>
        <ElevationWrapper>
          <ElevatedBox>
            <Container reverse={reverse}>
              <Column image={true}>
                <CardImageContainer>
                  <Img
                    src={imageSrc || '/public/image/kahil-guitar.jpg'}
                    alt="hero"
                  />
                </CardImageContainer>
              </Column>
              <Column>
                <h1>{title}</h1>
                <p>{description}</p>
                <VStack spacingTop={2}>
                  <a target="_blank" rel="noreferrer" href={link}>
                    {linkLable}
                  </a>
                </VStack>
              </Column>
            </Container>
          </ElevatedBox>
        </ElevationWrapper>
      </Inner>
    </Fade>
  )
}
