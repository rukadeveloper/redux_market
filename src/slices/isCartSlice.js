import { createSlice } from "@reduxjs/toolkit";

const isCartSlice = createSlice({
  name: "isCart",
  initialState: {
    isCart: false,
  },
  reducers: {
    toggle(state) {
      state.isCart = !state.isCart;
    },
  },
});

export const isCartActions = isCartSlice.actions;

export default isCartSlice;
