import { useRef, useEffect, useCallback } from 'react'

import styled from 'styled-components'

import { getYoutubeVideoId } from './linkUtils'

declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

type Props = {
  src: string
}

/**
 * Youtube's IFrame API player, necessary on mobile devices as autoplay for Youtube does not work using normal embed IFrame.
 */
export const PlayerFrameWithYoutubeApi = ({ src }: Props) => {
  const ref = useRef<HTMLDivElement>(null)
  const loadVideo = useCallback(() => {
    const videoId = getYoutubeVideoId(src)

    new window.YT.Player(ref.current, {
      videoId: videoId,
      events: {
        onReady: (event: any) => event.target.playVideo(),
      },
    })
  }, [src])

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'

      // onYouTubeIframeAPIReady will load the video after the script is loaded
      window.onYouTubeIframeAPIReady = loadVideo

      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag)
    } else {
      loadVideo()
    }
  }, [loadVideo])

  return (
    <Container>
      <div ref={ref} />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;

  iframe {
    width: 100%;
    height: 100%;
  }
`
