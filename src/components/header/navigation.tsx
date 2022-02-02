import React from 'react';
import cntl from 'cntl';
import { NavItem } from '../layout';
import { Link } from 'react-router-dom';

interface NavigationProps {
  isMobile?: boolean;
  navItems: NavItem[];
}

const desktopNavClassName = cntl`
  hidden
  ml-10
  space-x-8
  lg:block
`;

const mobileNavClassName = cntl`
  py-4
  flex
  flex-wrap
  justify-center
  space-x-6
  lg:hidden
`;

const navItemClassName = cntl`
  text-base
  font-medium
  text-white
  hover:text-indigo-50
`;

const Navigation: React.FC<NavigationProps> = ({
  isMobile = true,
  navItems,
}) => {
  const navContainerClassName = isMobile
    ? mobileNavClassName
    : desktopNavClassName;

  return (
    <div className={navContainerClassName}>
      {navItems.map((link) => (
        <Link key={link.name} to={link.href} className={navItemClassName}>
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
