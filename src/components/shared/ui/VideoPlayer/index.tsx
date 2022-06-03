import styled from 'styled-components'
import { LazyFacade } from './LazyFacade'

export type VideoPlayerProps = {
  mediaUrl: string
  loading?: 'lazy' | 'eager' | 'auto'
  thumbnailUrl?: string
  thumbnailAlt?: string
  spacingTop?: boolean
}

const RATIO_16_9 = 1920 / 1080

export const VideoPlayer = ({
  mediaUrl,
  thumbnailUrl,
  thumbnailAlt,
  spacingTop = true,
}: VideoPlayerProps) => {
  return (
    <Container spacingTop={spacingTop} ratio={RATIO_16_9}>
      <Content>
        <LazyFacade
          mediaUrl={mediaUrl}
          thumbnailUrl={thumbnailUrl}
          thumbnailAlt={thumbnailAlt}
        />
      </Content>
    </Container>
  )
}

const Content = styled.div<{
  borderRadius?: string | number
}>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`

const Container = styled.div<{ ratio: number; spacingTop?: boolean }>`
  display: block;
  padding-top: ${(p) => `${p.ratio ? (1 / p.ratio) * 100 : 0}%`};
  position: relative;
  margin-top: 3rem;
`
