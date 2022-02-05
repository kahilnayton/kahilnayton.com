import { ObjectFitImage } from "components/Hero";
import Fade from "react-reveal/Fade";
import { ElevatedBox, ElevationWrapper } from "styles/elevation";
import {
  Column,
  Container,
  ImageContainer,
  Inner,
  VStack,
} from "styles/structure";

interface TwoColumnProps {
  reverse?: boolean;
  id?: string;
  title?: string;
  description?: string;
  link?: string;
  linkLable?: string;
  imageSrc?: string;
}

export default function TwoColumns({
  reverse,
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
                <ImageContainer>
                  <ObjectFitImage
                    alt="section"
                    src={imageSrc || "/public/image/kahil-guitar.jpg"}
                  />
                </ImageContainer>
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
  );
}
