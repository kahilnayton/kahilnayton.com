import styled from 'styled-components'

import { Div } from '@/components/shared/ui/Div'

import type { BreakpointProp } from '@/components/shared/hooks/useBreakpointProps'
import { useBreakpointProps } from '@/components/shared/hooks/useBreakpointProps'

import { SquaredContainer } from './SquaredContainer'

export type ImageProps = {
  imageSrc: string
  imageAlt: string
  height?: BreakpointProp<number | string>
  maxHeight?: BreakpointProp<number | string>
  maxWidth?: BreakpointProp<number | string>
  squared?: boolean
  className?: string
}

export const ResponsiveImage = ({
  imageSrc,
  imageAlt,
  maxHeight: maxHeightProp,
  maxWidth: maxWidthProp,
  height: heightProp,
  squared = false,
  className,
}: ImageProps) => {
  const maxHeight = useBreakpointProps(maxHeightProp)
  const maxWidth = useBreakpointProps(maxWidthProp)
  const height = useBreakpointProps(heightProp)

  const img = <Img alt={imageAlt} src={imageSrc} className={className} />

  if (squared)
    return <SquaredContainer maxHeight={maxHeight}>{img}</SquaredContainer>

  return (
    <Div
      width="100%"
      height={height}
      maxHeight={maxHeight}
      maxWidth={maxWidth || 'unset'}
      overflow="hidden"
    >
      {img}
    </Div>
  )
}

const Img = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
`
