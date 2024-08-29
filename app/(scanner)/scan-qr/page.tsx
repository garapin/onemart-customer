"use client";

import { Provider } from "react-redux";
import { store } from "@/lib/store/store";
import { Suspense, useEffect } from "react";
import ApiService from "@/lib/service";

import React from "react";
import ScanQR from "./scanqr";
import { useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { setToken } from "@/lib/store/cartSlice";
import AuthPage from "./auth";

const Home = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Provider store={store}>
          <AuthPage />
          <ScanQR />
        </Provider>
      </Suspense>
    </div>
  );
};

export default Home;
