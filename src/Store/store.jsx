import { configureStore } from "@reduxjs/toolkit";
import Productreducer from "./productSlice";
import Cartreducer from "./cartSlice";
export const store = configureStore({
  reducer: {
    products: Productreducer,
    cart: Cartreducer,
  },
});
