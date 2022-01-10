import { Column, Container, Inner, VStack } from 'styles/structure';
import { ElevatedBox, ElevationWrapper } from 'styles/elevation';

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
    <Inner id={id}>
      <ElevationWrapper>
        <ElevatedBox>
          <Container reverse={reverse}>
            <Column>
              <img
                alt="section"
                src={imageSrc || '/public/image/kahil-guitar.jpg'}
              />
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
  );
}
