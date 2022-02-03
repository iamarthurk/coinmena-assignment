import React, { useMemo } from 'react';
import Actions from '../components/browse/actions';
import Icon from '../components/browse/icon';
import BrowseTable from '../components/browse/table';
import { ColumnConfig } from '../components/table';
import useCryptoAssets from '../hooks/useCryptoAssets';
import { CryptoAsset } from '../types';
import Loading from '../components/loading';

const columnConfig: ColumnConfig<CryptoAsset>[] = [
  {
    fieldName: 'id',
    label: 'Asset Id',
  },
  {
    fieldName: 'name',
    label: 'Name',
  },
  {
    fieldName: 'icon',
    label: 'Image',
    customRenderer: Icon,
  },
  {
    fieldName: 'price',
    label: 'Price',
  },
  {
    fieldName: 'actions',
    label: 'Actions',
    customRenderer: Actions,
  },
];

const BrowseAssets: React.FC = () => {
  const { error, data, isFetching, fetchNextPage } = useCryptoAssets();

  const transformed: CryptoAsset[] = useMemo(() => {
    const transformed: CryptoAsset[] = [];

    if (typeof data?.pages === 'undefined') {
      return transformed;
    }

    data?.pages.forEach((group: any) => {
      return group.data.forEach((item: any) => {
        const rawPrice = item.metrics.market_data.price_usd;
        const price = Math.round((rawPrice + Number.EPSILON) * 100) / 100;

        transformed.push({
          id: item.symbol,
          name: item.name,
          icon: `https://messari.io/asset-images/${item.id}/64.png?v=2`,
          price: `$${price}`,
        });
      });
    });

    return transformed;
  }, [data?.pages]);

  if (error) {
    return <div>Something went wrong. Please try again later.</div>;
  }

  // Show loading only on first fetch
  if (isFetching && typeof data === 'undefined') {
    return <Loading />;
  }

  return (
    <BrowseTable
      onFetchMore={() => {
        fetchNextPage();
      }}
      columnConfig={columnConfig}
      data={transformed}
      isFetching={isFetching}
    />
  );
};

export default BrowseAssets;
