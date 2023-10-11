import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartModel } from '../../api/artworks/artworks.model';

type CartState = {
  cart: CartModel[];
};

const initialState = {
  cart: []
} as CartState;

export const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    resetCart: () => initialState,
    addToCart: (state, action: PayloadAction<CartModel>) => {
      const { id, quantity = 1 } = action.payload;
      const existingProduct = state.cart.find((product) => product.id === id);

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        state.cart.push({ ...action.payload, quantity });
      }
    },
    removeFromCart: (state, action: PayloadAction<CartModel>) => {
      const { id } = action.payload;
      const existingProduct = state.cart.find((product) => product.id === id);

      if (existingProduct) {
        existingProduct.quantity -= 1;
        if (existingProduct.quantity === 0) {
          state.cart = state.cart.filter((product) => product.id !== id);
        }
      }
    }
  }
});

export const { addToCart, removeFromCart, resetCart } = cart.actions;
export default cart.reducer;
