import { CalendarIconSVG } from "@/assets/calendar";
import Image from "next/image";
import React from "react";

const TransactionCard = ({ data }: any) => {
  return (
    <div className="flex items-center justify-between border-b pb-4">
      <div className="flex items-center gap-2">
        <img
          src="https://static.toiimg.com/thumb/msid-105672842/105672842.jpg?width=500&resizemode=4"
          alt="carrot"
          className="w-16 h-16 object-cover rounded-md"
        />
        <div>
          <p className="text-xs text-primary">Pembayaran</p>
          <p>Carrot 1KG</p>
          <div className="flex items-center gap-1">
            <CalendarIconSVG />
            <p className="text-xs text-slate-500">2 Jun 2023</p>
          </div>
        </div>
      </div>
      <p className="text-red-600">Rp.80.000</p>
    </div>
  );
};

export default TransactionCard;
