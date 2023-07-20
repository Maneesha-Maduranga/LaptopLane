import { configureStore } from '@reduxjs/toolkit';

import { api } from './slices/api';

import userReducer from './slices/userSlice';
import cartReducer from './slices/cartSlice';
import modalReducer from './slices/modalSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: userReducer,
    cart: cartReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
