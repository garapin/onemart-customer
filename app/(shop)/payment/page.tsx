"use client";
import { ChevronLeftIconSVG } from "@/assets/chevron-left";
import { CreditCardIconSVG } from "@/assets/credit-card";
import PaymentItem from "@/components/PaymentItem";
import { useRouter } from "next/navigation";
import React from "react";

const Payment = () => {
  const router = useRouter();
  const paymentMethods = [
    {
      id: 1,
      name: "E-Wallet",
      image: "/images/credit.png",
      childs: [
        {
          id: 1,
          name: "Gopay",
          image: "/images/bca.png",
        },
        {
          id: 2,
          name: "OVO",
          image: "/images/bca.png",
        },
      ],
    },
    {
      id: 2,
      name: "Bank Transfer(FPX)",
      image: "/images/bank.png",
      childs: [
        {
          id: 1,
          name: "BCA",
          image: "/images/bca.png",
        },
        {
          id: 2,
          name: "BNI",
          image: "/images/bni.png",
        },
        {
          id: 3,
          name: "BRI",
          image: "/images/bri.png",
        },
        {
          id: 4,
          name: "Mandiri",
          image: "/images/mandiri.png",
        },
      ],
    },
    {
      id: 3,
      name: "Spaylater",
      image: "/images/shopee.png",
    },
  ];
  return (
    <div>
      <div className="flex items-center gap-2 border-b pb-6 p-6">
        <ChevronLeftIconSVG
          className="w-4 h-4 cursor-pointer"
          onClick={() => router.back()}
        />
        <h1 className="font-medium">Payment Method</h1>
      </div>
      <div className="p-6 space-y-4">
        {paymentMethods.map((paymentMethod) => (
          <PaymentItem key={paymentMethod.id} paymentMethod={paymentMethod} />
        ))}
      </div>
    </div>
  );
};

export default Payment;
