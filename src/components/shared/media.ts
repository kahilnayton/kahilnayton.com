export const BREAKPOINT_VALUES = {
  phone: null,
  tablet: 768,
  desktop: 1024,
} as const

export const mediaQueries = [
  null,
  `@media (min-width: ${BREAKPOINT_VALUES.tablet}px)`,
  `@media (min-width: ${BREAKPOINT_VALUES.desktop}px)`,
] as const

export const breakpointKeys = ['sm', 'md', 'lg'] as const

export const media = {
  md: mediaQueries[1], // min-width tablet
  lg: mediaQueries[2], // min-width desktop
} as const
