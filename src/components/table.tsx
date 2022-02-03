import React from 'react';
import cntl from 'cntl';
import { CryptoAsset } from '../types';

export interface CustomRenderedColumnProps<T> {
  row: T;
}

export interface ColumnConfig<T> {
  fieldName: string;
  label: string;
  customRenderer?: React.ComponentType<CustomRenderedColumnProps<T>>;
}

export interface TableProps<T> {
  data: T[];
  columnConfig: ColumnConfig<T>[];
}

const tableClassName = cntl`
  min-w-full
  divide-y
  divide-gray-200
`;

const tHeadClassName = cntl`
  px-6
  py-3
  text-left
  text-xs
  font-medium
  text-gray-500
  uppercase
  tracking-wider
`;

const tColClassName = cntl`
  px-6
  py-4
  whitespace-nowrap
  text-sm
  text-gray-500
`;

const Table: React.FC<TableProps<CryptoAsset>> = ({ columnConfig, data }) => {
  return (
    <table className={tableClassName}>
      <thead className="bg-gray-50">
        <tr>
          {columnConfig.map((col) => {
            return (
              <th key={col.fieldName} scope="col" className={tHeadClassName}>
                {col.label}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr
            key={row.id}
            className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
          >
            {columnConfig.map((col) => {
              const Component = col.customRenderer;

              if (!Component) {
                return (
                  <td key={col.fieldName} className={tColClassName}>
                    {row[col.fieldName]}
                  </td>
                );
              } else {
                return (
                  <td key={col.fieldName} className={tColClassName}>
                    <Component row={row} />
                  </td>
                );
              }
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
