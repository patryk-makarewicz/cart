import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import cartReducer from './features/cartSlice';
import { artworksApi } from './services/artworksApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    counterReducer,
    cartReducer,
    [artworksApi.reducerPath]: artworksApi.reducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat(artworksApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
