import React from "react";
import Hamburger from "../_ui/Hamburger";

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
