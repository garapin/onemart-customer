"use client";
import { QrCodeIconSVG } from "@/assets/qrcode";
import HeaderApp from "@/components/HeaderApp";
import TransactionCard from "@/components/TransactionCard";
import { useRouter } from "next/navigation";
import React from "react";

const Dashboard = () => {
  const router = useRouter();
  const labels = ["All", "Transaksi Terakhir", "Total Transaksi"];
  const datas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="relative">
      <HeaderApp />
      <div className="p-6 space-y-4">
        <h1>Transaksi Anda</h1>
        <div className="slide flex items-center gap-2">
          {labels.map((label, index) => (
            <div
              key={index}
              className="slide-item px-2 py-1 border rounded-md text-slate-500 text-sm"
            >
              {label}
            </div>
          ))}
        </div>
        <div className="items space-y-4">
          {datas.map((data, index) => (
            <TransactionCard key={index} data={data} />
          ))}
        </div>
      </div>
      <div
        className="fixed bottom-24 right-6 bg-primary/20 p-2 rounded-full cursor-pointer"
        onClick={() => router.push("/scan-qr")}
      >
        <div className="bg-primary p-3 rounded-full">
          <QrCodeIconSVG className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
