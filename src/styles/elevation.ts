import styled from 'styled-components'
import { dimensions } from '@/styles'

const ELEVATIONS = {
  small: `
    0.5px 1px 1px hsl(var(--shadow-color) / 0.7)
  `,
  medium: `
    1px 2px 2px hsl(var(--shadow-color) / 0.333),
    2px 4px 4px hsl(var(--shadow-color) / 0.333),
    3px 6px 6px hsl(var(--shadow-color) / 0.333)
  `,
  large: `
    1px 2px 2px hsl(var(--shadow-color) / 0.2),
    2px 4px 4px hsl(var(--shadow-color) / 0.2),
    4px 8px 8px hsl(var(--shadow-color) / 0.2),
    8px 16px 16px hsl(var(--shadow-color) / 0.2),
    16px 32px 32px hsl(var(--shadow-color) / 0.2)
  `,
}

export const ElevationWrapper = styled.div<{ theme: any }>`
  --shadow-color: ${({ theme }) => theme.shadowColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px;
  @media (min-width: ${dimensions.tablet}px) {
    padding: 32px;
  }
`

const Box = styled.div`
  border-radius: 8px;
  padding: 1.8rem;

  @media (min-width: ${dimensions.tablet}px) {
    padding: 3.2rem;
  }
`
export const SubtleBox = styled(Box)`
  width: 50px;
  height: 50px;
  box-shadow: ${ELEVATIONS.small};
`
export const ElevatedBox = styled(Box)`
  box-shadow: ${ELEVATIONS.large};
`
