import { useState, useEffect } from 'react'

import Link from 'next/link'

import type { LinkComponent } from '@/components/shared/ui/Link'

export const NextLink: LinkComponent = ({ children, href }) => {
  const [fallbackHref, setFallbackHref] = useState('')
  useEffect(() => {
    if (typeof window !== 'undefined' && !href)
      setFallbackHref(window?.location.pathname)
  }, [href])

  return (
    <Link href={href || fallbackHref} passHref>
      {children}
    </Link>
  )
}
