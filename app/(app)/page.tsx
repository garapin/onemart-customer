import CartCard from "@/components/CartCard";
import HeaderApp from "@/components/HeaderApp";
import React from "react";

const Dashboard = () => {
  const labels = ["All", "Transaksi Terakhir", "Total Transaksi"];
  const datas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
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
            <CartCard key={index} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
