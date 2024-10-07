import { createSlice } from "@reduxjs/toolkit";
import courseItems from "../CourseItems";

const initialState = {
  cartItem: courseItems,
  quantity: 11,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItem = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItem = state.cartItem.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const cartItem = state.cartItem.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity += 1;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItem.find(
        (item) => item.id === action.payload
      );
      cartItem.quantity -= 1;
    },
    calculate: (state) => {
      let total = 0;
      let quantity = 0;
      state.cartItem.forEach((item) => {
        total += item.quantity * item.price;
        quantity += item.quantity;
      });
      state.quantity = quantity;
      state.total = total;
    },
  },
});

export const { removeItem, clearCart, increase, decrease, calculate } =
  cartSlice.actions;
export default cartSlice.reducer;
