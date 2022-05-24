import { dimensions } from '@/styles'
import styled from 'styled-components'
import { SectionMaxWidth, SectionMinHeight } from './constants'

export const Inner = styled.div<{ paddingHorizontal?: boolean }>`
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  max-width: ${SectionMaxWidth};
  padding-top: 4rem;
  padding-left: ${(p) => p.paddingHorizontal && '16px'};
  padding-right: ${(p) => p.paddingHorizontal && '16px'};

  @media (min-width: ${dimensions.tablet}px) {
    padding-top: 6rem;
    padding-left: ${(p) => p.paddingHorizontal && '32px'};
    padding-right: ${(p) => p.paddingHorizontal && '32px'};
  }

  @media (min-width: ${dimensions.desktop}px) {
    max-width: 126.4rem;
  }
`

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 97.4rem;
  margin: 0 auto;
`

export const Container = styled.div<{ reverse?: boolean }>`
  margin: auto;
  margin-top: 24px;
  min-height: ${SectionMinHeight};
  flex-direction: column;
  display: flex;
  align-items: start;
  height: 100%;
  gap: 1.8rem;
  @media (min-width: ${dimensions.tablet}px) {
    gap: 2.4rem;
    flex-direction: ${(p) => (p.reverse ? 'row' : 'row-reverse')};
  }
`

export const CardImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  @media (min-width: ${dimensions.tablet}px) {
    min-height: 400px;
    min-width: 400px;
  }
`

export const Column = styled.div<{ image?: boolean }>`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: ${(p) => (p.image ? 'center' : 'column')};
  align-items: start;
  margin: auto;
  @media (min-width: ${dimensions.tablet}px) {
    /* display: contents; */
  }
`

export const LottieContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: auto;
  height: 40rem;
  max-width: ${SectionMaxWidth};
  padding-top: 16px;
  background-color: ${({ theme }) => theme.backgroundAlt};

  @media (min-width: ${dimensions.tablet}px) {
    flex-direction: row;
    padding-top: 24px;
  }
`

export const UnorderedList = styled.ul`
  display: flex;
  justify-content: flex-end;

  &.burger {
    border: solid;
    height: 20rem;
    width: 20rem;
    position: absolute;
    inset: 0;
    margin: auto;
    animation-name: slideUpFade;
  }
`

export const ListItem = styled.li`
  display: inline-block;
  position: relative;
  top: 0.3rem;
  width: 5rem;
`

export const VStack = styled.div<{ spacingTop: number }>`
  display: flex;
  flex-direction: column;
  padding-top: ${({ spacingTop }) => spacingTop}rem;
`

export const FooterImage = styled.div`
  height: 10rem;
  width: 10rem;
`

export const Img = styled.img``
