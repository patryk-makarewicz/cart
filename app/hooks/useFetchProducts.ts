import axios from 'axios';
import { useEffect, useState } from 'react';

// Import useAppSelector
import { ArtworksListDTO, ArtworksListSortMethod } from '@/api/artworks/artworks.model';
import { BASE_URL, headers } from '@/api/config';
import { setProductsData, setLoading, setError, ProductsState } from '@/redux/features/productsSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export const useFetchProducts = (params: { sort: ArtworksListSortMethod; filters: string[] }) => {
  const dispatch = useAppDispatch();
  const {
    products: productsList,
    loading: isLoadingProducts,
    error: isErrorProducts
  } = useAppSelector((state) => state.productsReducer); // Use useAppSelector to get data from Redux state

  useEffect(() => {
    const fetchProducts = () => {
      const filterQuery =
        params.filters.length > 0
          ? `&filterByFormula=OR(${params.filters.map((filter) => `{category}="${filter}"`).join(', ')})`
          : '';
      axios
        .get(`${BASE_URL}/artworks?view=default&${params.sort}${filterQuery}`, { headers })
        .then((response) => {
          dispatch(setProductsData(response.data));
          dispatch(setLoading(false));
        })
        .catch((err) => {
          console.error('An error occurred while fetching data:', err);
          dispatch(setError(true));
          dispatch(setLoading(false));
        });
    };

    fetchProducts();
  }, [params.sort, params.filters]);

  return { products: productsList, loading: isLoadingProducts, error: isErrorProducts }; // Return data from Redux state instead of local state
};
