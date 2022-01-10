import React from 'react';
import styled from '@emotion/styled';
import Hamburger from './Hamburger';

interface LayoutProps {
  children?: any;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <Hamburger />
      {children}
    </LayoutContainer>
  );
};

export default Layout;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
`;
