"use client";
import React from "react";
import { Provider } from "react-redux";
import { RootState, store } from "@/lib/store/store";
import { useAddToCartModal } from "../(components)/useAddToCartModal";
import { useRouter, useSearchParams } from "next/navigation";
import { Product } from "@/lib/model/Product";
import { ShopCartAddIconSVG } from "@/assets/shop-cart-add.tsx";
import { Scanner } from "@yudiel/react-qr-scanner";
import { addItem, setTargetDatabase } from "@/lib/store/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import ApiService from "@/lib/service";

const ScanQR = () => {
  const router = useRouter();
  const [enabled, setEnabled] = React.useState(false);
  const [qty, setQty] = React.useState(1);
  const [result, setResult] = React.useState<any>(null);
  const { ModalDialogConfirm, handleOpenModal } = useAddToCartModal();

  const [product, setProduct] = React.useState<Product | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const targetdatabase = searchParams.get("targetdatabase");
  const productid = searchParams.get("productid");

  // console.log(targetdatabase);

  React.useEffect(() => {
    setEnabled(true);
    return () => {
      setEnabled(false);
      if (productid !== null && targetdatabase !== null) {
        dispatch(setTargetDatabase(targetdatabase));
        ApiService.fetchDetailProduct(productid, targetdatabase, (data) => {
          data.rak_id.push(searchParams.get("rakid"));
          data.position_id.push(searchParams.get("positionid"));
          console.log(data);

          setProduct(data);
          setLoading(false);
          setResult(data);
        });
      }
    };
  }, []);

  return (
    <div className="h-full  relative">
      <ModalDialogConfirm />
      <Scanner
        allowMultiple={true}
        onScan={(result) => {
          const url = new URL(result[0]["rawValue"]);

          const params = url.searchParams;

          // console.log(params); // 667443ee8bbc090e47dd96b4
          // console.log(params.get("rakid")); // 66767b550f9f3b744fb640b5
          // console.log(params.get("positionid")); // 66767b550f9f3b744fb640b7
          // console.log(params.get("targetdatabase")); // mr-fran_puri_e51cf5fa-0b3

          ApiService.fetchDetailProduct(
            params.get("productid")!,
            params.get("targetdatabase")!,
            (data) => {
              data.rak_id.push(params.get("rakid"));
              data.position_id.push(params.get("positionid"));
              console.log(data);

              setProduct(data);
              setLoading(false);
              setResult(data);
            }
          );
        }}
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
                src={result.image}
                alt={result.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div>
                <p className="text-slate-500 text-sm">
                  {result.category_ref.category}
                </p>
                <p className="font-medium">{result.name}</p>
                <p className="font-medium">
                  Rp {result.price}
                  <span className="text-slate-500 font-light text-xs">
                    {" "}
                    /{result.unit_ref.unit}
                  </span>
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
              <p className="font-semibold">Rp.{result.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="text-center bg-white py-3 rounded-lg flex items-center justify-center border-2 border-primary px-14"
                onClick={() => router.push("/cart")}
              >
                <ShopCartAddIconSVG className="w-8 h-8" />
              </button>
              <button
                className="text-center border-2 border-primary w-full bg-primary text-white hover:bg-primary/80 py-4 rounded-lg"
                onClick={() => {
                  dispatch(addItem({ product: result, qty }));
                  handleOpenModal();
                  setTimeout(() => {
                    router.push("/cart");
                  }, 2000);
                }}
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
