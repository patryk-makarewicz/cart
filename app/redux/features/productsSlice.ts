import { createSlice } from '@reduxjs/toolkit';

import { ArtworkModel, ArtworksListSortMethod, FiltersParams, RangeParams } from '@/api/artworks/artworks.model';

export type ProductsState = {
  products: ArtworkModel[];
  isLoading: boolean;
  isError: boolean;
  params: {
    sort: ArtworksListSortMethod;
    filters: FiltersParams;
  };
};

const initialState = {
  products: [],
  isLoading: true,
  isError: false,
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
      state.isLoading = false;
      state.isError = false;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
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
    },
    setResetFilters: (state) => {
      state.params.filters.category = [];
      state.params.filters.range = 'none';
    }
  }
});

export const { setProductsData, setLoading, setError, setSort, setFiltersCategory, setFiltersRange, setResetFilters } =
  productsSlice.actions;

export default productsSlice.reducer;
