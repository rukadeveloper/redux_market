import { configureStore } from "@reduxjs/toolkit";
import isCartSlice from "./isCartSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    isCart: isCartSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
