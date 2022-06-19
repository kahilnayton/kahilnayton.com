import { ResponsiveImage } from '@/components/shared/ui/Image'
import { RichText } from '@/components/shared/ui/RichText/RichText'
import { BAND_CAMP_ID } from '@/pages'
import {
  CardImageContainer,
  Column,
  Container,
  ElevatedBox,
  ElevationWrapper,
  Inner,
  VStack,
} from '@/styles'
import styled from 'styled-components'
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
  contentId: string
}

export default function TwoColumns({
  reverse = true,
  slug,
  title,
  heroImage,
  body,
  ctaLink,
  ctaLabel,
  contentId,
}: TwoColumnProps) {
  console.log(slug, 'slug')

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
                {contentId === BAND_CAMP_ID && (
                  <IFrame
                    scrolling="no"
                    src="https://bandcamp.com/band_follow_button_classic/36737649"
                  ></IFrame>
                )}
              </Column>
            </Container>
          </ElevatedBox>
        </ElevationWrapper>
      </Inner>
    </Fade>
  )
}

export const IFrame = styled.iframe`
  border: 0;
  width: 100%;
  height: 50px;
`
