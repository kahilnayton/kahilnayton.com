import React from 'react'
import Hamburger from '@/components/_ui/Hamburger'

type LayoutProps = {
  children?: any
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Hamburger />
      {children}
    </>
  )
}

export default Layout
