import cntl from 'cntl';
import React from 'react';
import { CryptoAsset } from '../../types';
import { CustomRenderedColumnProps } from '../table';

const iconClassName = cntl`
  items-center
  justify-center
  h-8
  w-8
`;

const Icon: React.FC<CustomRenderedColumnProps<CryptoAsset>> = ({ row }) => {
  return (
    <div className="flex">
      <img className={iconClassName} src={row.icon} alt={row.name} />
    </div>
  );
};

export default Icon;
