import React, { useState } from 'react';
import styled from 'styled-components';
// @ts-ignore
import { document } from 'browser-monads';

import { Inner } from 'styles/structure';
import dimensions from 'styles/dimensions';
import { links } from 'lib';
import { headerHeightMobile, z } from 'styles/constants';

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobile = () => {
    const bodyClasses = document.getElementsByTagName('body')[0].classList;
    bodyClasses.toggle('is-locked');
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer className={`${isOpen ? 'is-open' : ''}`}>
      <HeaderHamburger
        as="button"
        type="button"
        aria-label="burger"
        onClick={toggleMobile}
      >
        <span></span>
      </HeaderHamburger>
      <HeaderMobile>
        <MobileLinks>
          <MobileToggle>
            <MobileContent>
              {links.map((link, i) => (
                <a
                  onClick={toggleMobile}
                  key={`link_${i}`}
                  href={`#${link.href}`}
                >
                  {link.label}
                </a>
              ))}
            </MobileContent>
          </MobileToggle>
        </MobileLinks>
      </HeaderMobile>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  position: fixed;
  left: 0;
  height: ${headerHeightMobile};
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  z-index: ${z.burger};
  display: block;
  @media (min-width: ${dimensions.tablet}px) {
    display: none;
    right: 3.5rem;
  }
`;

const HeaderHamburger = styled.input`
  display: block;
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-72%);
  height: 2.3rem;
  cursor: pointer;

  > span {
    display: block;
    position: relative;
    width: 2.4rem;
    height: 0.2rem;
    background-color: ${({ theme }) => theme.accent};
    transition: all 0.4s ease;
    transform-origin: center center;

    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      height: 0.2rem;
      background-color: inherit;
      transition: all 0.4s ease;
    }

    &::before {
      top: -0.6rem;
    }

    &::after {
      top: 0.6rem;
    }
  }

  .is-open & {
    span {
      transform: rotate(135deg);

      &::before,
      &::after {
        top: 0;
        transform: rotate(90deg);
      }
    }
  }

  @media (min-width: ${dimensions.tablet}px) {
    right: 3.5rem;
  }

  @media (min-width: ${dimensions.desktop}px) {
    display: none;
  }
`;

const HeaderMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  margin-top: ${headerHeightMobile};
  width: 100%;
  height: calc(100vh - ${headerHeightMobile});
  opacity: 0;
  visibility: hidden;
  user-select: none;

  .is-open & {
    opacity: 1;
    visibility: visible;
    transform: scaleY(1);
  }

  @media (min-width: ${dimensions.tablet}px) {
    display: none;
  }
`;

const MobileLinks = styled.ul`
  height: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;

const MobileToggle = styled.div`
  position: relative;
  transition: background 0.08s ease-in-out;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
  padding: 32px;
`;

const MobileContent = styled(Inner)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .is-open > & {
    display: block;
  }

  li {
    & + * {
      margin-top: 1.6rem;
    }
  }
`;
