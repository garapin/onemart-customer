"use client";
import { ChevronLeftIconSVG } from "@/assets/chevron-left";
import { QrCodeIconSVG } from "@/assets/qrcode";
import CartItem from "@/components/CartItem";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store/store";
import { setCart, setEmail, setTargetDatabase } from "@/lib/store/cartSlice";
import { toast } from "react-hot-toast";
import ApiService from "@/lib/service";
import formatRupiah from "../../../lib/formatRupiah"; // Adjust the import path as necessary

const CartPage = () => {
  const router = useRouter();
  const cart = useSelector((state: RootState) => state.cart.items);
  const total = useSelector((state: RootState) => state.cart.total);
  const email = useSelector((state: RootState) => state.cart.email);
  const target_database = useSelector(
    (state: RootState) => state.cart.targetDatabase
  );

  // const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  // console.log(cart);

  React.useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const storedDb = localStorage.getItem("targetdatabase");
    const storedEmail = localStorage.getItem("email");

    if (storedCart) {
      dispatch(setCart(JSON.parse(storedCart)));
    }
    if (storedDb) {
      dispatch(setTargetDatabase(storedDb));
    }
    if (storedEmail) {
      dispatch(setEmail(storedEmail));
    }
  }, [dispatch]);

  return (
    <div>
      <div className="flex  items-center gap-2 border-b pb-6  p-6">
        <ChevronLeftIconSVG
          className="w-4 h-4 cursor-pointer"
          onClick={() => router.back()}
        />
        <h1 className="font-medium">Cart</h1>
      </div>
      <div className="items py-4 space-y-4">
        {cart.map((item) => (
          <CartItem key={item._id} product={item} />
        ))}
      </div>
      <div className="px-6 space-y-4 border-b pb-60 ">
        <div>
          <p className="font-medium">Butuh Yang Lainnya? </p>
          <p className="text-sm text-slate-500">
            Tambahkan kebutuhan lainnya jika anda mau
          </p>
        </div>
        <div className="flex items-center gap-4">
          {/* <button
            className="text-center bg-white py-3 rounded-full flex items-center justify-center border-2 border-primary text-primary w-full break-words"
            onClick={() => router.push("/shop")}
          >
            + Add Item
          </button> */}
          <button
            className="text-center bg-white py-3 rounded-full flex items-center gap-2 justify-center border-2 border-primary text-primary w-full"
            onClick={() => router.push("/add-to-cart")}
          >
            <QrCodeIconSVG color="#102CA0" className="h-4 w-4" />{" "}
            <span> Add Item</span>
          </button>
        </div>
        <div className=" h-[74px] flex-col justify-start items-start gap-2 inline-flex w-full">
          <div className="self-stretch">
            <span className="text-[#09091a] text-xs font-medium ">Email </span>
            <span className="text-[#d00000] text-xs font-medium ">*</span>
          </div>
          <div className="  self-stretch h-12 py-3.5 rounded border border-primary justify-start items-center gap-2.5 inline-flex w-full">
            <div className="w-4 h-4 justify-center items-center flex"></div>
            <input
              value={email}
              onChange={(e) => {
                // console.log(e.target.value);

                dispatch(setEmail(e.target.value));
                // console.log(ApiService.validateEmail(e.target.value));
              }}
              type="text"
              placeholder="Input email address"
              className=" grow shrink basis-0 text-primary text-xs font-normal tracking-wide focus:outline-none w-full"
            />
          </div>
        </div>
        {/* <div className="pt-4 flex items-center gap-4 justify-between">
          <div className="flex items-center gap-2">
            <CreditCardIconSVG className="w-6 h-6" />
            <p>Payment Method</p>
          </div>
          <div
            className="flex items-center gap-2"
            onClick={() => router.push("/payment-method")}
          >
            <p className="text-slate-500">Pilih Metode Pembayaran</p>
            <ChevronRightIconSVG color="#242424" className="w-4 h-4" />
          </div>
        </div> */}
      </div>
      <div
        className="fixed  bottom-0 w-full p-4 max-w-[600px] bg-white rounded-tl-2xl rounded-tr-2xl shadow-2xl space-y-3"
        style={{
          boxShadow: "0px -4px 10px -2px #0000000D",
        }}
      >
        <div className="border-2 w-48 mx-auto"></div>
        <div className="flex items-center gap-2 justify-between py-4">
          <p className="font-semibold">Total Pembayaran</p>
          <p className="font-semibold">{formatRupiah(total)}</p>
        </div>
        <button
          onClick={() => {
            if (email === "") {
              toast.error("Email harus diisi"); // Displays a success message
              return;
            }
            if (!ApiService.validateEmail(email!)) {
              toast.error("Email tidak valid"); // Displays a success message
              return;
            }

            const sendItems: any[] = []; // Array that can hold any type of elements
            cart.forEach((item) => {
              sendItems.push({
                product: item,
                quantity: item.quantity,
              });
            });

            const data = {
              email,
              items: sendItems,
              total,
            };
            console.log(target_database);

            ApiService.createInvoices(data, target_database, (data, error) => {
              if (error) {
                toast.error("Gagal membuat invoice"); // Displays a success message
                return;
              } else {
                console.log(data.invoice.invoiceUrl);

                router.push(data.invoice.invoiceUrl);
              }
            });
          }}
          className="text-center border-2 border-primary w-full bg-primary text-white hover:bg-primary/80 py-4 rounded-lg"
        >
          Pembayaran
        </button>
      </div>
    </div>
  );
};

export default CartPage;
