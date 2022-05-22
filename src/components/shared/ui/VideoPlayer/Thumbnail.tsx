import { useState, useEffect } from 'react'

import styled from 'styled-components'

import { ResponsiveImage } from '@/components/shared/ui/Image'

import { getYoutubeThumbnail, isYoutube } from './linkUtils'

type ThumbnailProps = {
  showVideo?: boolean
  thumbnailAlt?: string
  thumbnailUrl?: string
  mediaUrl: string
}

const DEFAULT_THUMBNAIL_ALT = 'Video'

export const Thumbnail = ({
  showVideo,
  thumbnailAlt = DEFAULT_THUMBNAIL_ALT,
  thumbnailUrl: customThumbnail,
  mediaUrl,
}: ThumbnailProps) => {
  const [thumbnail, setThumbnail] = useState<string | undefined>(() => {
    if (customThumbnail) return customThumbnail

    if (isYoutube(mediaUrl)) {
      return getYoutubeThumbnail(mediaUrl)
    }
  })

  useEffect(() => {
    if (customThumbnail) {
      setThumbnail(customThumbnail)
      return
    }

    if (isYoutube(mediaUrl)) {
      const nextThumbnail = getYoutubeThumbnail(mediaUrl)

      setThumbnail(nextThumbnail)
    }
  }, [customThumbnail, mediaUrl])

  return (
    <ImageContainer freezeAnimation={showVideo}>
      {thumbnail && (
        <ResponsiveImage
          imageAlt={thumbnailAlt}
          imageSrc={thumbnail}
          height="100%"
        />
      )}
    </ImageContainer>
  )
}

const ImageContainer = styled.div<{
  freezeAnimation?: boolean
}>`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  ${({ freezeAnimation }) =>
    freezeAnimation ? `transition: transform 200000s` : ''};

  &:hover,
  &:focus {
    ${({ freezeAnimation }) =>
      freezeAnimation ? '' : `transition: transform 5s`};

    transform: scale(1.05);
  }
`
