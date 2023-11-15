'use client';

import { useEffect } from 'react';

import { ArtworksListSortMethod, FiltersParams } from '@/api/artworks/artworks.model';
import { setProductsData, setLoading, setError } from '@/redux/features/productsSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getArtworksList } from '@/api/artworks';

export const useFetchProducts = (params: { sort: ArtworksListSortMethod; filters: FiltersParams }) => {
  const dispatch = useAppDispatch();
  const { products, isLoading, isError } = useAppSelector((state) => state.productsReducer);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getArtworksList(params);
        dispatch(setProductsData(data));
      } catch (err) {
        console.error('An error occurred while fetching data:', err);
        dispatch(setError(true));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [params.sort, params.filters]);

  return { products, isLoading, isError };
};
