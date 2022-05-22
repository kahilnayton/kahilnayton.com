import type { ReactNode } from 'react'

import styled from 'styled-components'

type SquaredContainerProps = {
  children: ReactNode
  maxHeight?: number | string
}

export const SquaredContainer = ({
  children,
  maxHeight,
}: SquaredContainerProps) => (
  <Container maxHeight={maxHeight}>
    <InnerContainer>{children}</InnerContainer>
  </Container>
)

const Container = styled.div<{ maxHeight?: number | string }>`
  height: 100%;
  width: 100%;
  position: relative;
  display: block;
  overflow: hidden;
  ${({ maxHeight }) =>
    maxHeight &&
    `max-width: ${maxHeight}${typeof maxHeight === 'number' ? 'px' : ''}`};

  &:before {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`

const InnerContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  margin: auto;

  > img {
    height: 100%;
  }
`
