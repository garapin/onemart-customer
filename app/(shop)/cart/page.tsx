"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/lib/store/store";
import CartPage from "./cartpages";
import { Toaster } from "react-hot-toast";
import AuthPage from "@/app/(scanner)/scan-qr/auth";

const index = () => {
  return (
    <div>
      <Provider store={store}>
        <AuthPage />
        <CartPage />
      </Provider>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default index;
