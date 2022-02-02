import React from 'react';
import cntl from 'cntl';
import Brand from './brand';
import Navigation from './navigation';
import Cta from './cta';
import { LayoutProps } from '../layout';

const topNavWrapperClassName = cntl`
  max-w-7xl
  mx-auto
  px-4
  sm:px-6
  lg:px-8
`;

const topNavContainerClassName = cntl`
  w-full
  py-6
  flex
  items-center
  justify-between
  border-b
  border-indigo-500
  lg:border-none
`;

const Header: React.FC<LayoutProps> = ({
  logoSrc,
  navItems,
  brandTitle,
  onSignInClick,
  headerCtaContent,
}) => {
  return (
    <header className="bg-indigo-600">
      <nav className={topNavWrapperClassName} aria-label="Top">
        <div className={topNavContainerClassName}>
          <div className="flex items-center">
            <Brand brandTitle={brandTitle} logoSrc={logoSrc} />
            <Navigation navItems={navItems} isMobile={false} />
          </div>
          <Cta>{headerCtaContent}</Cta>
        </div>
        <Navigation navItems={navItems} />
      </nav>
    </header>
  );
};

export default Header;
