import React from "react";

const CartItem = () => {
  const [qty, setQty] = React.useState(1);
  return (
    <div className="flex items-center justify-between gap-2 border-b pb-4 px-6">
      <div className="flex items-center gap-4">
        <img
          src="https://static.toiimg.com/thumb/msid-105672842/105672842.jpg?width=500&resizemode=4"
          alt="carrot"
          className="w-24 h-24 object-cover rounded-md"
        />
        <div>
          <p className="text-slate-500 text-sm">Sayuran</p>
          <p className="font-medium line-clamp-2">
            Wortel Australia Nikmat Mantap Merah Baru Panen Segar Sekali
          </p>
          <p className="font-light text-red-500">
            <span className="line-through text-sm">Rp. 80.000</span>{" "}
            <span className="font-medium text-black">Rp.60.000</span>
          </p>
          <p className="text-slate-500">1 KG</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div
          onClick={() => qty > 1 && setQty(qty - 1)}
          className="cursor-pointer h-10 w-10 flex items-center justify-center rounded-full text-black text-lg bg-slate-300"
        >
          -
        </div>
        <p>{qty}</p>
        <div
          onClick={() => setQty(qty + 1)}
          className="cursor-pointer h-10 w-10 flex items-center justify-center rounded-full text-white text-lg bg-slate-600"
        >
          +
        </div>
      </div>
    </div>
  );
};

export default CartItem;
