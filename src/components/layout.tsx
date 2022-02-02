import React, { Fragment } from 'react';
import Header from './header/header';

export interface NavItem {
  name: string;
  href: string;
}

export interface LayoutProps {
  navItems: NavItem[];
  brandTitle: string;
  logoSrc: string;
  onSignInClick: () => void;
  headerCtaContent: React.ReactElement;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <Fragment>
      <Header {...props} />
      {props.children}
    </Fragment>
  );
};

export default Layout;
