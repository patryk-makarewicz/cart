import { ArtworksModel } from '@/api/artworks/artworks.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartState = {
  cart: ArtworksModel[];
};

const initialState = {
  cart: []
} as CartState;

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    resetCart: () => initialState,
    addToCart: (state, action: PayloadAction<ArtworksModel>) => {
      state.cart.push(action.payload);
    }
  }
});

export const { addToCart, resetCart } = cart.actions;
export default cart.reducer;
