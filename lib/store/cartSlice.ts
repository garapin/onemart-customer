// src/store/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../model/Product";

interface CartState {
  items: Product[];
  total: number;
  targetDatabase: string;
  token?: string;
}

const initialState: CartState = {
  items: [], // Mulai dengan state kosong di server
  total: 0,
  targetDatabase: "",
  token: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (
      state,
      action: PayloadAction<{ product: Product; qty: number }>
    ) => {
      const { product, qty } = action.payload;
      const existingItem = state.items.find((item) => item._id === product._id);
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + qty;
      } else {
        state.items.push({ ...product, quantity: qty });
      }
      state.total = state.items.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
      state.total = state.items.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item._id === action.payload);
      if (item) {
        item.quantity = (item.quantity || 1) + 1;
      }
      state.total = state.items.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item._id === action.payload);
      if (item) {
        item.quantity = (item.quantity || 1) - 1;
        if (item.quantity <= 0) {
          state.items = state.items.filter((i) => i._id !== action.payload);
        }
      }
      state.total = state.items.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    setCart: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
      state.total = state.items.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    setTargetDatabase: (state, action: PayloadAction<string>) => {
      state.targetDatabase = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("targetdatabase", action.payload);
      }
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("token", action.payload);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      if (typeof window !== "undefined") {
        localStorage.removeItem("cart");
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  setCart,
  setTargetDatabase,
  setToken,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
