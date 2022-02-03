import React from 'react';
import cntl from 'cntl';
import { CryptoAsset } from '../../types';
import Table, { TableProps } from '../table';
import { CubeTransparentIcon } from '@heroicons/react/solid';

const wrapperClassName = cntl`
  flex
  px-4
  sm:px-6
  lg:px-8
  max-w-7xl
  mx-auto
  pt-10
  flex-col
  overflow-x-auto
`;

const containerClassName = cntl`
  -my-2
  sm:-mx-6
  lg:-mx-8
`;

const alignerClassName = cntl`
  py-2
  align-middle
  inline-block
  min-w-full
  sm:px-6
  lg:px-8
`;

const shadowBoxClassName = cntl`
  shadow
  border-b
  border-gray-200
  sm:rounded-lg
`;

const showMoreButtonWrapperClassName = cntl`
  flex
  items-center
  justify-center
  mt-10
`;

const showMoreButtonClassName = cntl`
  inline-flex
  items-center
  px-4
  py-2
  my-10
  border
  border-transparent
  text-sm
  font-medium
  rounded-md
  shadow-sm
  text-white
  bg-indigo-600
  hover:bg-indigo-700
  focus:outline-none
  focus:ring-2
  focus:ring-offset-2
  focus:ring-indigo-500
`;

const loadingIconClassName = cntl`
  h-4
  w-4
  ml-3
  animate-spin
`;

interface BrowseTableProps<T> extends TableProps<T> {
  onFetchMore: () => void;
  isFetching: boolean;
}

const BrowseTable: React.FC<BrowseTableProps<CryptoAsset>> = ({
  data,
  columnConfig,
  onFetchMore,
  isFetching,
}) => {
  return (
    <>
      <div className={wrapperClassName}>
        <div className={containerClassName}>
          <div className={alignerClassName}>
            <div className={shadowBoxClassName}>
              <Table columnConfig={columnConfig} data={data} />
            </div>
          </div>
        </div>
      </div>
      <div className={showMoreButtonWrapperClassName}>
        <button
          type="button"
          onClick={onFetchMore}
          className={showMoreButtonClassName}
        >
          Show more
          {isFetching ? (
            <CubeTransparentIcon className={loadingIconClassName} />
          ) : null}
        </button>
      </div>
    </>
  );
};

export default BrowseTable;
