import { PlusIconSVG } from "@/assets/plus";
import Image from "next/image";
import React from "react";

const ProductCard = () => {
  return (
    <div className="shadow-md rounded-bl-md rounded-br-md">
      <img
        src="https://static.toiimg.com/thumb/msid-105672842/105672842.jpg?width=500&resizemode=4"
        alt="carrot"
        className="w-full h-40 object-cover rounded-tl-md rounded-tr-md"
      />
      <div className="p-4">
        <p className="h-12 line-clamp-2">
          Fresh Carrot Lorem ipsum dolor sit amet consectetur.
        </p>
        <p>
          Rp.18.000<span className="text-slate-500 text-xs">/kg</span>
        </p>
        <div className="flex items-center gap-2 justify-between">
          <div>
            <p className="text-red-600 line-through text-sm">Rp.21.000</p>
            <p className="text-xs text-slate-400 font-light">140 Terjual</p>
          </div>
          <div className="bg-primary rounded-full p-3 cursor-pointer">
            <PlusIconSVG className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
