"use client";

import { Suspense } from "react";
import Receipt from "./receipt";
import AuthPage from "@/app/(scanner)/add-to-cart/auth";
import { Provider } from "react-redux";
import { store } from "@/lib/store/store";

const Page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Provider store={store}>
          <AuthPage />
          <Receipt />
        </Provider>
      </Suspense>
    </div>
  );
};

export default Page;
