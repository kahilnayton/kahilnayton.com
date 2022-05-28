import NavLinks from '@/components/shared/ui/NavLinks'
import SocialBar from '@/components/shared/ui/SocialBar'
import type { LinkType } from '@/lib'
import { dimensions, Inner } from '@/styles'
import styled from 'styled-components'

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
