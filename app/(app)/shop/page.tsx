"use client";

import { CartOutlineIconSVG } from "@/assets/cart-outline";
import { FilterIconSVG } from "@/assets/filter";
import { SearchIconSVG } from "@/assets/search";
import ProductCard from "@/components/ProductCard";
import { useRouter } from "next/navigation";
import React from "react";

const Shop = () => {
  const router = useRouter();
  const [categories, setCategories] = React.useState([
    "Sayuran",
    "Buah",
    "Daging",
    "Ikan",
    "Minuman",
    "Makanan",
    "Ikan",
    "Minuman",
    "Makanan",
  ]);
  return (
    <div className="p-6 space-y-4">
      <div className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-2 border p-2 rounded-lg shadow-sm flex-1">
          <SearchIconSVG className="w-4 h-4" />
          <input
            type="text"
            className="focus:border-none focus:outline-none"
            placeholder="Ex : Sayuran segar"
          />
        </div>
        <div>
          <CartOutlineIconSVG
            className="w-10 h-10 cursor-pointer"
            onClick={() => router.push("/cart")}
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="p-2 border rounded-md text-slate-500 text-sm">
          <FilterIconSVG className="w-4 h-4" />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto">
          {categories.map((category) => (
            <div className="p-2 border rounded-md text-slate-500 text-sm cursor-pointer">
              {category}
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {Array.from({ length: 12 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
