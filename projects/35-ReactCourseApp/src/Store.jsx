import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./control/CartSlice.jsx"

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})