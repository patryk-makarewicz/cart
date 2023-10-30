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
    }
  }
});

export const { setProductsData, setLoading, setError } = productsSlice.actions;

export default productsSlice.reducer;
