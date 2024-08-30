import { Product } from "@/lib/model/Product";
import Image from "next/image";
import React from "react";
interface ReceiptItemProps {
  product: Product;
}
const ReceiptItem: React.FC<ReceiptItemProps> = ({ product }) => {
  return (
    <div className="flex flex-col px-10 mt-4 w-full max-w-full">
      <div className="flex flex-col justify-center py-2.5 w-full border-b border-zinc-100">
        <div className="flex gap-5 justify-between items-center w-full">
          <img
            alt="carrot"
            src={product.image}
            loading="lazy"
            className="object-contain shrink-0 self-stretch my-auto rounded aspect-square w-[60px]"
          />
          <div className="flex justify-between items-center self-stretch my-auto  w-full">
            <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0">
              <div className="text-xs text-blue-900">Makanan</div>
              <div className="mt-1 font-semibold text-neutral-800 text-sm">
                {product.name}
              </div>
              <div className="mt-1 font-normal text-xs text-neutral-500">
                @Rp.{product.price} x {product.quantity}
              </div>
            </div>
            <div className="flex-2 shrink self-stretch my-auto font-semibold text-right text-red-700 basis-0">
              Rp.{product.quantity ? product.price * product.quantity : 0}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptItem;
