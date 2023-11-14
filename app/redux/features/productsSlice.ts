import { createSlice } from '@reduxjs/toolkit';

import { ArtworkModel, ArtworksListSortMethod, FiltersParams, RangeParams } from '@/api/artworks/artworks.model';

export type ProductsState = {
  products: ArtworkModel[];
  loading: boolean;
  error: boolean;
  params: {
    sort: ArtworksListSortMethod;
    filters: FiltersParams;
  };
};

const initialState = {
  products: [],
  loading: true,
  error: false,
  params: {
    sort: 'default',
    filters: {
      category: [],
      range: 'none'
    }
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
    setFiltersCategory: (state, action) => {
      const { value, checked } = action.payload;
      const updatedFiltersCategory: string[] = checked
        ? [...state.params.filters.category, value]
        : state.params.filters.category.filter((filter) => filter !== value);

      state.params.filters.category = updatedFiltersCategory;
    },
    setFiltersRange: (state, action) => {
      const { value, checked } = action.payload;
      const updatedFiltersRange: RangeParams = checked ? value : 'none';

      state.params.filters.range = updatedFiltersRange;
    }
  }
});

export const { setProductsData, setLoading, setError, setSort, setFiltersCategory, setFiltersRange } =
  productsSlice.actions;

export default productsSlice.reducer;
