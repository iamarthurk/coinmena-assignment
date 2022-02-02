import React from 'react';
import cntl from 'cntl';

const containerClassName = cntl`
  ml-10
  space-x-4
`;

const Cta: React.FC = ({ children }) => {
  return <div className={containerClassName}>{children}</div>;
};

export default Cta;
