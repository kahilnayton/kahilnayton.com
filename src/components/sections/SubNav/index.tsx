import styled from 'styled-components';

import { Inner } from 'styles/structure';
import dimensions from 'styles/dimensions';
import SocialBar from 'components/SocialBar';
import { LinkType } from 'lib';

interface SubNavProps {
  links: LinkType[];
}

export default function SubNav({ links }: SubNavProps) {
  return (
    <SubNavInner>
      <SubNavLinks>
        {links.map((link, i) => (
          <a key={`link_${i}`} href={`#${link.href}`}>
            {link.label}
          </a>
        ))}
        <SocialBar />
      </SubNavLinks>
    </SubNavInner>
  );
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
`;

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
`;
