import { useEffect, useState } from 'react'

type DefaultDimensions = { width?: number; height?: number }

const getDimensions = (defaultDimensions?: DefaultDimensions) => {
  if (typeof window === 'undefined') {
    return {
      width: defaultDimensions?.width || 0,
      height: defaultDimensions?.height || 0,
    }
  }
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  }
}

const useViewportDimensions = (defaultDimensions?: DefaultDimensions) => {
  const [dimensions, setDimensions] = useState(() =>
    getDimensions(defaultDimensions),
  )

  useEffect(() => {
    const listener = () => setDimensions(getDimensions())
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [])

  return dimensions
}

export default useViewportDimensions
