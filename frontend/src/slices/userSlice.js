import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null,
};

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    storeUser: (state, actions) => {
      state.user = actions.payload;
      localStorage.setItem('user', JSON.stringify(actions.payload));
    },
    removeUser: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
});

// Action creators are generated for each case reducer function
export const { storeUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
