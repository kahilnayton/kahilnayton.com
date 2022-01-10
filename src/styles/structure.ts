import styled from "styled-components";
import dimensions from "styles/dimensions";
import { SectionMaxWidth, SectionMinHeight } from "./constants";

export const Inner = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  max-width: ${SectionMaxWidth};
  padding-top: 4rem;

  @media (min-width: ${dimensions.tablet}px) {
    padding-top: 6rem;
  }

  @media (min-width: ${dimensions.desktop}px) {
    max-width: 126.4rem;
  }
`;

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 97.4rem;
  margin: 0 auto;
`;

export const Container = styled.div<{ reverse: boolean }>`
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
    flex-direction: ${(p) => (p.reverse ? "row" : "row-reverse")};
  }
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  margin: auto;
`;

export const LottieContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: auto;
  height: 40rem;
  max-width: ${SectionMaxWidth};
  padding: 16px;
  background-color: ${({ theme }) => theme.backgroundAlt};

  @media (min-width: ${dimensions.tablet}px) {
    flex-direction: row;
    padding: 24px;
    padding-top: 4rem;
  }
`;

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
`;

export const ListItem = styled.li`
  display: inline-block;
  position: relative;
  top: 0.3rem;
  width: 5rem;
`;

export const VStack = styled.div<{ spacingTop: number }>`
  display: flex;
  flex-direction: column;
  padding-top: ${({ spacingTop }) => spacingTop}rem;
`;
