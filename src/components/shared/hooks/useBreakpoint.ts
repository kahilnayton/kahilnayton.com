import { useState, useRef, useEffect } from 'react'

import { BREAKPOINT_VALUES } from '@/components/shared/media'

export const useBreakpoint = () => {
  const [width, setWidth] = useState(0)
  const previousWidth = useRef(0)

  useEffect(() => {
    const callback = () => {
      if (
        (previousWidth.current < BREAKPOINT_VALUES.tablet &&
          window.innerWidth >= BREAKPOINT_VALUES.tablet) ||
        (previousWidth.current >= BREAKPOINT_VALUES.tablet &&
          window.innerWidth < BREAKPOINT_VALUES.tablet) ||
        (previousWidth.current < BREAKPOINT_VALUES.desktop &&
          window.innerWidth >= BREAKPOINT_VALUES.desktop) ||
        (previousWidth.current >= BREAKPOINT_VALUES.desktop &&
          window.innerWidth < BREAKPOINT_VALUES.desktop)
      ) {
        previousWidth.current = window.innerWidth
        setWidth(window.innerWidth)
      }
    }
    window.addEventListener('resize', callback)
    callback()
    return () => window.removeEventListener('resize', callback)
  }, [])

  return {
    isPhone: width < BREAKPOINT_VALUES.tablet,
    isTablet:
      width >= BREAKPOINT_VALUES.tablet && width < BREAKPOINT_VALUES.desktop,
    isDesktop: width >= BREAKPOINT_VALUES.desktop,
  }
}
