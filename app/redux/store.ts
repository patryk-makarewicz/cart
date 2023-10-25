'use client';

import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './features/cartSlice';
import productsReducer from './features/productsSlice';

export const store = configureStore({
  reducer: {
    productsReducer,
    cartReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
