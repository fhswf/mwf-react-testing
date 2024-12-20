import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./../features/cart/cartSlice";
import productReducer from "./../features/product/productSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer
    }
});

export function setupStore(preloadedState) {
    return configureStore({
      reducer: {
        cart: cartReducer,
        products: productReducer
      },
      preloadedState,
    });
  }

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch
const useAppDispatch = () => useDispatch<AppDispatch>();

export { store, type RootState, useAppDispatch }