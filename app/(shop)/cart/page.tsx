"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/app/store/store";
import CartPage from "./cartpages";
import { Toaster } from "react-hot-toast";

const index = () => {
  return (
    <div>
      <Provider store={store}>
        <CartPage />
      </Provider>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default index;
