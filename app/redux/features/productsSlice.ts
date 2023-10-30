import { createSlice } from '@reduxjs/toolkit';

import { ArtworkModel, ArtworksListSortMethod } from '@/api/artworks/artworks.model';

export type ProductsState = {
  products: ArtworkModel[];
  loading: boolean;
  error: boolean;
  params: {
    sort: ArtworksListSortMethod;
    filters: string[];
  };
};

const initialState = {
  products: [],
  loading: true,
  error: false,
  params: {
    sort: 'default',
    filters: []
  }
} as ProductsState;

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductsData: (state, action) => {
      state.products = action.payload.records;
      state.loading = false;
      state.error = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setSort: (state, action) => {
      state.params.sort = action.payload;
    },
    setFilters: (state, action) => {
      const { value, checked } = action.payload;
      const updatedFilters: string[] = checked
        ? [...state.params.filters, value]
        : state.params.filters.filter((filter) => filter !== value);

      state.params.filters = updatedFilters;
    }
  }
});

export const { setProductsData, setLoading, setError, setSort, setFilters } = productsSlice.actions;

export default productsSlice.reducer;
