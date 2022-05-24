import { useBreakpoint } from '@/components/shared/hooks/useBreakpoint'
import { useLogger } from '@/providers/LoggerProvider'
import { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import { isYoutube, standardizeYoutubeUrl } from './linkUtils'
import PlayButton from './PlayButton.svg'
import { PlayerFrame } from './PlayerFrame'
import { PlayerFrameWithYoutubeApi } from './PlayerFrameWithYoutubeApi'
import { Thumbnail } from './Thumbnail'

type LazyFacadeProps = {
  mediaUrl: string
  thumbnailUrl?: string
  thumbnailAlt?: string
}

export const LazyFacade = ({
  mediaUrl,
  thumbnailUrl,
  thumbnailAlt = '',
}: LazyFacadeProps) => {
  const { isDesktop } = useBreakpoint()
  const [showVideo, setShowVideo] = useState(false)
  const { notifyError } = useLogger()

  const onClick = useCallback(() => {
    setShowVideo(true)
  }, [])

  const sanitizedUrl = useMemo((): string | undefined => {
    if (isYoutube(mediaUrl)) return standardizeYoutubeUrl(mediaUrl)

    return
  }, [mediaUrl])

  if (!sanitizedUrl) {
    const error = 'Invalid video URL, current only supporting: Youtube'

    notifyError(error)

    throw new Error(error)
  }

  const srcHasQueryParams = sanitizedUrl.includes('?')

  return (
    <Facade onClick={onClick}>
      {showVideo &&
        (!isDesktop && isYoutube(mediaUrl) ? (
          <PlayerFrameWithYoutubeApi
            src={`${sanitizedUrl}${srcHasQueryParams ? '&' : '?'}autoplay=1`}
          />
        ) : (
          <PlayerFrame
            src={`${sanitizedUrl}${srcHasQueryParams ? '&' : '?'}autoplay=1`}
          />
        ))}

      <Thumbnail
        showVideo={showVideo}
        thumbnailAlt={thumbnailAlt}
        thumbnailUrl={thumbnailUrl}
        mediaUrl={sanitizedUrl}
      />

      {!showVideo && <FacadePlayOverlay />}
    </Facade>
  )
}

const OVERLAY_CLASS = 'overlay'

const Facade = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  &:hover,
  &:focus {
    cursor: pointer;

    .${OVERLAY_CLASS} {
      filter: brightness(0.9);
      transition: filter 0.2s cubic-bezier(0, 0, 0.2, 1);
    }
  }
`

const FacadePlayOverlay = () => {
  const { isPhone, isDesktop } = useBreakpoint()

  const Icon = PlayButton?.src || PlayButton

  return (
    <OverlayContainer centered={isPhone} className={OVERLAY_CLASS}>
      <CirclePlay
        sizing={isDesktop ? 'lg' : 'md'}
        alt="Play video"
        src={Icon}
      />
    </OverlayContainer>
  )
}

const OverlayContainer = styled.div<{ centered: boolean }>`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: ${({ centered }) => (centered ? '50%' : '80%')};

  display: flex;
  align-items: center;

  user-select: none;
  pointer-events: none;
`

const CirclePlay = styled.img<{ sizing: 'lg' | 'md' }>`
  width: ${({ sizing }) => (sizing === 'lg' ? '104px' : '64px')};
  height: ${({ sizing }) => (sizing === 'lg' ? '104px' : '64px')};
`
