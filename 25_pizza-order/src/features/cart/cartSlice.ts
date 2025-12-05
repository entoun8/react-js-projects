import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, CartState } from "../../types";
import type { RootState } from "../../store";

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      state.cart.push(action.payload);
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseQuantity(state, action: PayloadAction<number>) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.unitPrice * item.quantity;
      }
    },
    decreaseQuantity(state, action: PayloadAction<number>) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (item) {
        item.quantity--;
        item.totalPrice = item.unitPrice * item.quantity;

        if (item.quantity === 0) {
          cartSlice.caseReducers.removeFromCart(state, action);
        }
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getTotalCartPrice = (state: RootState): number =>
  state.cart.cart.reduce((sum, item) => (sum += item.totalPrice), 0);

export const getTotalCartQuantity = (state: RootState): number =>
  state.cart.cart.reduce((sum, item) => (sum += item.quantity), 0);

export const getCurrentQuantityById = (id: number) => (state: RootState): number => {
  const item = state.cart.cart.find((item) => item.pizzaId === id);
  return item?.quantity || 0;
};
