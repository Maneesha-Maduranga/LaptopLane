import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [], amount: 0, total: 0, shippingAddress: {} };
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.total = 0;
      state.amount = 0;
      localStorage.removeItem('cart');
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      state.amount = state.cartItems.reduce(
        (accumulator, current) => accumulator + current.price,
        0
      );
      state.total = state.cartItems.length;

      localStorage.setItem('cart', JSON.stringify(state));
    },
    addToCart: (state, action) => {
      let laptop = action.payload;
      let found = state.cartItems.find((item) => item._id === laptop._id);
      if (!found) {
        state.cartItems = [...state.cartItems, laptop];
      }
      state.amount = state.cartItems.reduce(
        (accumulator, current) => accumulator + current.price,
        0
      );
      state.total = state.cartItems.length;

      localStorage.setItem('cart', JSON.stringify(state));
    },
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, clearCart, saveShippingAddress } =
  cartSlice.actions;
export default cartSlice.reducer;
