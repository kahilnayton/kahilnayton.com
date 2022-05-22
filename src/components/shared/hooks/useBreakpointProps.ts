import { useBreakpoint } from './useBreakpoint'

/**
 * Type to abstract breakpoint values, so that @param T be or `T` or `T[mobile, tablet?, desktop?]`, defaulting to the last provided value of the array.
 */
export type BreakpointProp<T> = T | [T, T?, T?]

/**
 *
 * @param props of type `T` accepts either `T` or `T[mobile, tablet?, desktop?]`, defaulting to the last value of the array.
 * @returns Single `T` value
 */
export const useBreakpointProps = <T = any>(props: BreakpointProp<T>): T => {
  const { isPhone, isTablet } = useBreakpoint()

  if (!Array.isArray(props)) return props

  const lastPropValue = props[props.length - 1]

  return [...props, lastPropValue, lastPropValue, lastPropValue][
    isPhone ? 0 : isTablet ? 1 : 2
  ] as T
}
