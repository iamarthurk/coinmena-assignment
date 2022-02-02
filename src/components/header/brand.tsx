import React from 'react';
import { Link } from 'react-router-dom';

interface BrandProps {
  logoSrc: string;
  brandTitle: string;
}

const Brand: React.FC<BrandProps> = ({ logoSrc, brandTitle }) => {
  return (
    <Link to="/">
      <span className="sr-only">{brandTitle}</span>
      <img className="h-6 w-auto" src={logoSrc} alt="" />
    </Link>
  );
};

export default Brand;
