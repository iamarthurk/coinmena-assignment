import { useInfiniteQuery } from 'react-query';

export default function useCryptoAssets(limit = 10) {
  const fetchAssets = ({ pageParam = 1 }) =>
    fetch(
      `https://data.messari.io/api/v2/assets?page=${pageParam}&limit=${limit}`,
    ).then((res) => res.json());

  const state = useInfiniteQuery(['cryptoAssets'], fetchAssets, {
    getNextPageParam: (lastPage, pages) => {
      return pages.length + 1;
    },
    keepPreviousData: true,
  });

  return state;
}
