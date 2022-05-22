import styled from 'styled-components'

import { Div } from '@/components/shared/ui/Div'
import type { DivProps } from '@/components/shared/ui/Div'

type BackgroundContainerProps = Omit<DivProps, 'background'> & {
  background: Required<DivProps['background']>
  fullWidthBleed?: boolean
  children: any
}

export const BackgroundContainer = ({
  children,
  fullWidthBleed = false,
  ...props
}: BackgroundContainerProps) => (
  <Div position="relative" {...props}>
    {fullWidthBleed ? (
      <>
        <BackgroundBleed background={props.background} />

        <Div position="relative">{children}</Div>
      </>
    ) : (
      children
    )}
  </Div>
)

const BackgroundBleed = styled(Div)`
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  position: absolute;
  top: 0;
  bottom: 0;
`
