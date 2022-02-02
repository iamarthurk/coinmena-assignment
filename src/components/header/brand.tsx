import React from 'react';

interface BrandProps {
  logoSrc: string;
  brandTitle: string;
}

const Brand: React.FC<BrandProps> = ({ logoSrc, brandTitle }) => {
  return (
    <a href="#">
      <span className="sr-only">{brandTitle}</span>
      <img className="h-6 w-auto" src={logoSrc} alt="" />
    </a>
  );
};

export default Brand;
