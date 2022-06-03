import { ResponsiveImage } from '@/components/shared/ui/Image'
import { RichText } from '@/components/shared/ui/RichText/RichText'
import {
  CardImageContainer,
  Column,
  Container,
  ElevatedBox,
  ElevationWrapper,
  Inner,
  VStack,
} from '@/styles'
// @ts-ignore
import Fade from 'react-reveal/Fade'

type TwoColumnProps = {
  reverse?: boolean
  id?: string
  title?: string
  slug?: string
  heroImage?: any
  ctaLink?: string
  ctaLabel?: string
  body?: any
  description?: string
  link?: string
  imageSrc?: string
}

export default function TwoColumns({
  reverse = true,
  slug,
  title,
  heroImage,
  description,
  body,
  ctaLink,
  ctaLabel,
}: TwoColumnProps) {
  return (
    <Fade bottom>
      <Inner id={slug}>
        <ElevationWrapper>
          <ElevatedBox>
            <Container reverse={reverse}>
              <Column image={true}>
                <CardImageContainer>
                  <ResponsiveImage
                    imageAlt="image"
                    imageSrc={
                      heroImage?.fields?.file?.url ||
                      '/public/image/kahil-guitar.jpg'
                    }
                  />
                </CardImageContainer>
              </Column>
              <Column>
                <h1>{title}</h1>
                {body && <RichText content={body} />}
                <VStack spacingTop={2}>
                  <a target="_blank" rel="noreferrer" href={ctaLink}>
                    {ctaLabel}
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
