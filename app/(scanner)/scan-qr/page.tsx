"use client";
import { ShopCartAddIconSVG } from "@/assets/shop-cart-add.tsx";
import { Scanner } from "@yudiel/react-qr-scanner";
import React from "react";
import { useAddToCartModal } from "../(components)/useAddToCartModal";

const ScanQR = () => {
  const [enabled, setEnabled] = React.useState(false);
  const [qty, setQty] = React.useState(1);
  const [result, setResult] = React.useState<any>(null);
  const { ModalDialogConfirm, handleOpenModal } = useAddToCartModal();

  React.useEffect(() => {
    setEnabled(true);

    return () => {
      setEnabled(false);
    };
  }, []);
  return (
    <div className="h-screen relative">
      <ModalDialogConfirm />
      <Scanner
        onResult={(text, result) => {
          setResult(text);
        }}
        onError={(error) => console.log(error?.message)}
        enabled={enabled}
        styles={{
          video: {
            width: "100%",
            height: "100%",
            objectFit: "cover",
          },
          container: {
            // height: "100%",
          },
        }}
      />
      <div className="bg-[#CCCCCC] h-full"></div>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white rounded-tl-2xl rounded-tr-2xl shadow-lg space-y-3">
        <div className="border-2 w-48 mx-auto"></div>
        {result ? (
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img
                src="https://static.toiimg.com/thumb/msid-105672842/105672842.jpg?width=500&resizemode=4"
                alt="carrot"
                className="w-24 h-24 object-cover rounded-md"
              />
              <div>
                <p className="text-slate-500 text-sm">Sayuran</p>
                <p className="font-medium">
                  Wortel Australia Nikmat Mantap Merah Baru Panen
                </p>
                <p className="font-medium">
                  Rp. 10.000
                  <span className="text-slate-500 font-light text-xs">/kg</span>
                </p>
                <div className="flex items-center gap-2">
                  <div
                    onClick={() => qty > 1 && setQty(qty - 1)}
                    className="cursor-pointer h-9 w-9 flex items-center justify-center rounded-full text-black text-lg bg-slate-300"
                  >
                    -
                  </div>
                  <p>{qty}</p>
                  <div
                    onClick={() => setQty(qty + 1)}
                    className="cursor-pointer h-9 w-9 flex items-center justify-center rounded-full text-white text-lg bg-slate-600"
                  >
                    +
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 justify-between">
              <p className="font-semibold">Total Pembayaran</p>
              <p className="font-semibold">Rp.10.000</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-center bg-white py-3 rounded-lg flex items-center justify-center border-2 border-primary px-14">
                <ShopCartAddIconSVG className="w-8 h-8" />
              </button>
              <button
                className="text-center border-2 border-primary w-full bg-primary text-white hover:bg-primary/80 py-4 rounded-lg"
                onClick={handleOpenModal}
              >
                Tambah Keranjang
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <img
              src="/images/qr-placeholder.png"
              alt="qr"
              className="w-32 h-32"
            />
            <p>
              Scan Barcode yang ada di rak untuk memasukan daftar belanjaan di
              Keranjang Kamu.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScanQR;
