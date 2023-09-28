import { ArtworkModel } from '@/api/artworks/artworks.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartState = {
  cart: ArtworkModel[];
};

const initialState = {
  cart: []
} as CartState;

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    resetCart: () => initialState,
    addToCart: (state, action: PayloadAction<ArtworkModel>) => {
      state.cart.push(action.payload);
    }
  }
});

export const { addToCart, resetCart } = cart.actions;
export default cart.reducer;
