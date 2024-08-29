"use client";

import { Suspense } from "react";
import Receipt from "./receipt";

const Page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Receipt />
      </Suspense>
    </div>
  );
};

export default Page;
