"use client";

import { Provider } from "react-redux";
import { store } from "@/lib/store/store";
import { useEffect } from "react";

import React from "react";
import ScanQR from "./scanqr";
import { useSearchParams } from "next/navigation";

const Home = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <Provider store={store}>
        <ScanQR />
      </Provider>
    </div>
  );
};

export default Home;
