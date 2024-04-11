import { CartIconSVG } from "@/assets/cart";
import { ChevronRightIconSVG } from "@/assets/chevron-right";
import { StoreIconSVG } from "@/assets/store-icon";
import { useRouter } from "next/navigation";
import React from "react";

const HeaderApp = () => {
  const router = useRouter();
  return (
    <div className="bg-gradient-to-r from-[#373B44] to-[#0C2BAA] p-6">
      <div className="flex items-center justify-between gap-2">
        <div>
          <div className="flex items-center gap-2 text-white mb-2">
            <StoreIconSVG className="w-6 h-6" />
            <p>One Mart Buah Batu</p>
          </div>
          <div className="flex items-center gap-2 text-white">
            <p className="font-light text-sm">Pilih Lokasi One mart</p>
            <ChevronRightIconSVG className="w-3 h-3" />
          </div>
        </div>
        <CartIconSVG
          className="cursor-pointer w-10 h-10"
          onClick={() => router.push("/cart")}
        />
      </div>
    </div>
  );
};

export default HeaderApp;
