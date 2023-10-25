import { createSlice } from '@reduxjs/toolkit';

import { ArtworksListDTO } from '../../api/artworks/artworks.model';

export type ProductsState = {
  products: ArtworksListDTO;
  loading: boolean;
  error: boolean;
};

const initialState = {
  products: { records: [] },
  loading: true,
  error: false
} as ProductsState;

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductsData: (state, action) => {
      state.products = action.payload;
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
