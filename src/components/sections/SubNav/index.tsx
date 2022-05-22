import styled from 'styled-components'
import Link from 'next/link'

import { Inner, dimensions } from '@/styles'
import SocialBar from '@/components/shared/ui/SocialBar'
import type { LinkType } from '@/lib'
import NavLinks from '@/components/shared/ui/NavLinks'

type SubNavProps = {
  links: LinkType[]
}

export default function SubNav({ links }: SubNavProps) {
  return (
    <SubNavInner>
      <SubNavLinks>
        <NavLinks links={links} />
        <SocialBar />
      </SubNavLinks>
    </SubNavInner>
  )
}

const SubNavInner = styled(Inner)`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
  display: none;
  @media (min-width: ${dimensions.tablet}px) {
    display: flex;
    padding: 32px;
  }
`

const SubNavLinks = styled.div`
  display: none;

  @media (min-width: ${dimensions.tablet}px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: auto;
    align-items: center;
    justify-content: space-between;
  }
`
