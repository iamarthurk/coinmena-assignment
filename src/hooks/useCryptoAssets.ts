import { useInfiniteQuery } from 'react-query';

export default function useCryptoAssets(
  limit = 10,
  fields = 'id,symbol,name,metrics',
) {
  const endpoint = 'https://data.messari.io/api/v2/assets';

  const fetchAssets = ({ pageParam = 1 }) =>
    fetch(`${endpoint}?page=${pageParam}&limit=${limit}&fields=${fields}`).then(
      (res) => res.json(),
    );

  const state = useInfiniteQuery(['cryptoAssets'], fetchAssets, {
    getNextPageParam: (lastPage, pages) => {
      return pages.length + 1;
    },
    keepPreviousData: true,
  });

  return state;
}
