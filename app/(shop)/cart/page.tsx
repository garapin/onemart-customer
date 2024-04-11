"use client";
import { ChevronLeftIconSVG } from "@/assets/chevron-left";
import { ChevronRightIconSVG } from "@/assets/chevron-right";
import { CreditCardIconSVG } from "@/assets/credit-card";
import { QrCodeIconSVG } from "@/assets/qrcode";
import CartItem from "@/components/CartItem";
import { useRouter } from "next/navigation";
import React from "react";

const CartPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex items-center gap-2 border-b pb-6 p-6">
        <ChevronLeftIconSVG
          className="w-4 h-4 cursor-pointer"
          onClick={() => router.back()}
        />
        <h1 className="font-medium">Cart</h1>
      </div>
      <div className="items py-4 space-y-4">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="px-6 space-y-4 border-b pb-60">
        <div>
          <p className="font-medium">Butuh Yang Lainnya? </p>
          <p className="text-sm text-slate-500">
            Tambahkan kebutuhan lainnya jika anda mau
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="text-center bg-white py-3 rounded-full flex items-center justify-center border-2 border-primary px-14 text-primary w-full"
            onClick={() => router.push("/cart")}
          >
            + Add Item
          </button>
          <button
            className="text-center bg-white py-3 rounded-full flex items-center gap-2 justify-center border-2 border-primary px-14 text-primary w-full"
            onClick={() => router.push("/cart")}
          >
            <QrCodeIconSVG color="#102CA0" className="h-4 w-4" />{" "}
            <span> Barcode</span>
          </button>
        </div>
        <div className="pt-4 flex items-center gap-4 justify-between">
          <div className="flex items-center gap-2">
            <CreditCardIconSVG className="w-6 h-6" />
            <p>Payment Method</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-slate-500">Shopee Pay</p>
            <ChevronRightIconSVG color="#242424" className="w-4 h-4" />
          </div>
        </div>
      </div>
      <div
        className="fixed bottom-0 left-0 right-0 p-4 bg-white rounded-tl-2xl rounded-tr-2xl shadow-2xl space-y-3"
        style={{
          boxShadow: "0px -4px 10px -2px #0000000D",
        }}
      >
        <div className="border-2 w-48 mx-auto"></div>
        <div className="flex items-center gap-2 justify-between py-4">
          <p className="font-semibold">Total Pembayaran</p>
          <p className="font-semibold">Rp.10.000</p>
        </div>
        <button
          className="text-center border-2 border-primary w-full bg-primary text-white hover:bg-primary/80 py-4 rounded-lg"
          onClick={() => router.push("/payment")}
        >
          Pembayaran
        </button>
      </div>
    </div>
  );
};

export default CartPage;
