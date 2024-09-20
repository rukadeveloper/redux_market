import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    dummy: [
      {
        id: 1,
        name: "테스트 아이템1",
        price: 6000,
        ins: "테스트 아이템1 설명",
        quantity: 1,
      },
      {
        id: 2,
        name: "테스트 아이템2",
        price: 5000,
        ins: "테스트 아이템2 설명",
        quantity: 1,
      },
    ],
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          totalPrice: newItem.price,
          price: newItem.price,
          quantity: newItem.quantity++,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload.id;
      console.log(id);
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
