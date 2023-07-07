import { configureStore } from '@reduxjs/toolkit';

import { api } from './slices/api';

import userReducer from './slices/userSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: userReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
