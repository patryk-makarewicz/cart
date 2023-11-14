'use client';

import axios from 'axios';
import { useEffect } from 'react';

import { ArtworksListSortMethod, FiltersParams } from '@/api/artworks/artworks.model';
import { BASE_URL, headers } from '@/api/config';
import { setProductsData, setLoading, setError, ProductsState } from '@/redux/features/productsSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

export const useFetchProducts = (params: { sort: ArtworksListSortMethod; filters: FiltersParams }) => {
  const dispatch = useAppDispatch();
  const {
    products: productsList,
    loading: isLoadingProducts,
    error: isErrorProducts
  } = useAppSelector((state) => state.productsReducer);

  useEffect(() => {
    const fetchProducts = () => {
      const categoryQuery =
        params.filters.category.length > 0
          ? `OR(${params.filters.category.map((filter) => `{category}="${filter}"`).join(',')})`
          : '';

      let rangeQuery = '';

      switch (params.filters.range) {
        case 'lower':
          rangeQuery = `AND({price}<20)`;
          break;
        case 'middle':
          rangeQuery = `AND({price}>20,{price}<100)`;
          break;
        case 'higher':
          rangeQuery = `AND({price}>100,{price}<200)`;
          break;
        case 'more':
          rangeQuery = `AND({price}>200)`;
          break;
        case 'none':
          rangeQuery = ``;
          break;
        default:
          rangeQuery = ``;
          break;
      }

      const rangeFragment = categoryQuery && rangeQuery ? `,${rangeQuery}` : rangeQuery;

      axios
        .get(`${BASE_URL}/artworks?view=default&${params.sort}&filterByFormula=AND(${categoryQuery}${rangeFragment})`, {
          headers
        })
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

  return { products: productsList, loading: isLoadingProducts, error: isErrorProducts };
};
