import { useBreakpoint } from '@/components/shared/hooks/useBreakpoint'
import { useHasMounted } from '@/components/shared/hooks/useHasMounted'

const breakpointMap = {
  phone: 'isPhone',
  tablet: 'isTablet',
  desktop: 'isDesktop',
} as const

type OnOptions = keyof typeof breakpointMap

type OnlyProps = {
  on: 'client' | OnOptions | OnOptions[]
  children?: React.ReactNode
}

export const Only = ({ on, children }: OnlyProps) => {
  const hasMounted = useHasMounted()
  const breakpoint = useBreakpoint()

  if (
    !hasMounted ||
    (on !== 'client' &&
      (typeof on === 'object'
        ? !on.find((v) => breakpoint[breakpointMap[v]])
        : !breakpoint[breakpointMap[on]]))
  )
    return null

  return <>{children}</>
}
