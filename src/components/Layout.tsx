import React from "react";
import Hamburger from "./Hamburger";

interface LayoutProps {
  children?: any;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Hamburger />
      {children}
    </>
  );
};

export default Layout;
