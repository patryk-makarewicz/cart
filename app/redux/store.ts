import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import cartReducer from './features/cartSlice';

export const store = configureStore({
  reducer: {
    cartReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
