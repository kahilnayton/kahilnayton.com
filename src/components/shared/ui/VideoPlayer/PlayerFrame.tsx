import { useRef, useState, useEffect } from 'react'

import styled from 'styled-components'

type PlayerFrameProps = {
  src: string
  loading?: 'lazy' | 'eager' | 'auto'
}

export const PlayerFrame = ({ src, loading }: PlayerFrameProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [iframeLoaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    iframeRef.current?.addEventListener('load', () => {
      setLoaded(true)
    })
  }, [])

  return (
    <Iframe
      ref={iframeRef}
      loaded={iframeLoaded}
      src={src}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      scrolling="no"
      loading={loading === 'auto' ? undefined : loading}
      title="Player Frame"
    />
  )
}

const Iframe = styled.iframe<{ loaded: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;

  ${({ loaded }) => !loaded && 'visibility: hidden;'}
`
