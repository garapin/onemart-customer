import { useRouter, useSearchParams } from "next/navigation";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import ApiService from "@/lib/service";
import { InvoicesDetails } from "@/lib/model/InvoicesDetails";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";
import { setCart, clearCart } from "@/lib/store/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store/store";

const Receipt = () => {
  const [transaction, setTransaction] = useState<InvoicesDetails>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const invoice = searchParams.get("invoice");
  const targetDatabase = searchParams.get("merchant");
  const containerRef = useRef(null);
  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart.items);
  const handleShare = () => {
    const url = window.location.href; // Mendapatkan URL saat ini

    if (navigator.share) {
      // Jika perangkat mendukung Web Share API
      navigator
        .share({
          title: "Check out this transaction",
          url: url,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing:", error));
    } else {
      // Fallback untuk perangkat yang tidak mendukung Web Share API
      navigator.clipboard
        .writeText(url)
        .then(() => alert("Link copied to clipboard"))
        .catch((error) => console.error("Error copying to clipboard:", error));
    }
  };
  const handleDownload = () => {
    const element = containerRef.current;
    html2canvas(element!, {
      scale: 2, // Increase the screenshot resolution
      useCORS: true, // Handle images from other sources
      logging: true, // Enable logs for debugging
      allowTaint: true, // Allow canvas to store images from other domains
    })
      .then((canvas: HTMLCanvasElement) => {
        const imgData: string = canvas.toDataURL("image/png");

        const margin = 10; // Margin in mm
        const imgWidth = 210 - margin * 2; // PDF page width in mm (A4 size) minus margins
        const imgHeight = (canvas.height * imgWidth) / canvas.width; // Calculate image height

        const pdf: jsPDF = new jsPDF("p", "mm", [
          210, // Width (A4)
          imgHeight + margin * 2, // Dynamically calculated height based on the content
        ]);

        pdf.addImage(imgData, "PNG", margin, margin, imgWidth, imgHeight);
        pdf.save("invoices.pdf");
      })
      .catch((error) => {
        console.error("Failed to generate PDF", error);
      });
  };

  useEffect(() => {
    setLoading(true);
    const storedCart = localStorage.getItem("cart");
    const cart = JSON.parse(storedCart!);
    console.log(cart);

    // console.log(storedCart || storedCart!.length > 0);

    const isclear = cart === null || cart!.length === 0;
    console.log(isclear);

    if (targetDatabase !== null && invoice !== null) {
      ApiService.checkOutPayment(invoice, targetDatabase, !isclear, (data) => {
        // console.log(data.invoice);
        setTransaction(data);
        console.log(data);

        setLoading(false);
        if (!isclear) {
          localStorage.removeItem("cart");
        }
      });
    }
  }, []);
  return (
    <div>
      <div>
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <div
              className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div className=" flex overflow-hidden mt-20 flex-col text-sm  items-center pt-3 pb-96 mx-auto w-full bg-white max-w-full min-w-[320px]">
            <div ref={containerRef}>
              <div className="h-[227.23px]  flex-col w-full justify-center items-center gap-[26.65px] inline-flex">
                <div className="w-[53.29px] h-[53.29px] relative">
                  {transaction?.status === "PAID" ||
                  transaction?.status === "SETTLED" ? (
                    <FaCheckCircle className="w-full h-full text-green-600" />
                  ) : (
                    <FaExclamationCircle className="w-full h-full text-red-600" />
                  )}
                </div>
                <div className="self-stretch h-[107.32px] flex-col justify-start items-center gap-[13.32px] flex">
                  <div className="text-xl font-normal ">
                    Payment{" "}
                    {transaction?.status === "PAID" ||
                    transaction?.status === "SETTLED"
                      ? "Success"
                      : transaction?.status === "EXPIRED"
                      ? "Expired"
                      : "Failed"}
                    !
                  </div>
                  <div className="text-zinc-950 text-2xl font-bold">
                    Rp.{" "}
                    {new Intl.NumberFormat("id-ID").format(
                      transaction?.amount || 0
                    )}
                  </div>
                </div>
              </div>
              <div className="h-full flex-col justify-center self-stretch items-center w-full gap-[26.65px] inline-flex ">
                <div className=" h-full px-10 self-stretch flex-col justify-start items-start gap-[23.32px] flex">
                  <div className="self-stretch justify-start items-start gap-[26.65px] inline-flex">
                    <div className="grow shrink basis-0 text-[#707070]  leading-[29.98px]">
                      Invoices
                    </div>
                    <div className="text-center text-[#121212]  leading-[29.98px]">
                      {transaction?.externalId.split("&")[0]}
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start gap-[26.65px] inline-flex">
                    <div className="grow shrink basis-0 text-[#707070]  leading-[29.98px]">
                      Merchant
                    </div>
                    <div className="text-center text-[#121212]  leading-[29.98px]">
                      {transaction?.merchantName}
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start gap-[26.65px] inline-flex">
                    <div className="grow shrink basis-0 text-[#707070]  leading-[29.98px]">
                      Payment Time
                    </div>
                    <div className="text-center text-[#121212]  leading-[29.98px] ">
                      {ApiService.formatDate(transaction?.updated!)}
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start gap-[26.65px] inline-flex">
                    <div className="grow shrink basis-0 text-[#707070] leading-[29.98px]">
                      Payment Method
                    </div>
                    <div className="text-center text-[#121212]  leading-[29.98px]">
                      {transaction?.paymentMethod ?? "None"}
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start gap-[26.65px] inline-flex">
                    <div className="grow shrink basis-0 text-[#707070]   leading-[29.98px]">
                      Email
                    </div>
                    <div className="text-center text-[#121212]  leading-[29.98px]">
                      {transaction?.payerEmail}
                    </div>
                  </div>
                </div>
                <div className="self-stretch mb-10 px-8  flex-col justify-start items-start gap-[23.32px] flex">
                  <table className="w-full text-sm text-[#121212] leading-[29.98px]">
                    <thead>
                      <tr>
                        <th className="text-left p-2 font-normal text-[#121212]">
                          Item Name
                        </th>
                        <th className="text-center p-2 font-normal text-[#121212]">
                          Quantity
                        </th>
                        <th className="text-right p-2 font-normal text-[#121212]">
                          Total Harga
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {transaction?.items.map((item, index) => (
                        <tr key={index}>
                          <td className="p-2 font-normal text-[#121212]">
                            <div>{item.name}</div>
                            <div className="text-xs text-[#121212]">
                              Rp.
                              {new Intl.NumberFormat("id-ID").format(
                                item?.price || 0
                              )}
                            </div>
                          </td>
                          <td className="p-2 font-normal text-center text-[#121212]">
                            x {item.quantity}
                          </td>
                          <td className="p-2 font-normal text-right text-[#121212]">
                            <div className="text-sm text-[#121212]">
                              {/* <div className="line-through text-red-500">
                                Rp.{item.price}
                              </div> */}
                              <div className="ml-2">
                                Rp.
                                {new Intl.NumberFormat("id-ID").format(
                                  item?.price || 0
                                )}
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td className="pl-2">
                          <hr className="border-t-2 border-gray-300" />
                        </td>
                        <td>
                          <hr className="border-t-2 border-gray-300" />
                        </td>
                        <td className="pr-2">
                          <hr className="border-t-2 border-gray-300" />
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 font-bold text-left">Total Harga</td>
                        <td></td>
                        <td className="p-2 font-bold text-right">
                          Rp.
                          {new Intl.NumberFormat("id-ID").format(
                            transaction?.items.reduce(
                              (acc, item) => acc + item.price * item.quantity,
                              0
                            ) || 0
                          )}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
            <div className="pt-10 px-8 w-full flex space-x-4">
              <div className="flex-1">
                <button
                  onClick={() => {
                    transaction?.status === "PAID" ||
                    transaction?.status === "SETTLED"
                      ? handleDownload()
                      : transaction?.status === "EXPIRED"
                      ? router.push("/add-to-cart")
                      : router.push("transaction?.webhook.invoiceUrl");
                  }}
                  className="text-center bg-primary py-3 rounded-full flex items-center justify-center border-2 text-white w-full"
                  type="button"
                >
                  {transaction?.status === "PAID" ||
                  transaction?.status === "SETTLED"
                    ? "Download Receipt"
                    : transaction?.status === "EXPIRED"
                    ? "Order Again"
                    : "Pay Now"}
                </button>
              </div>
              <div className="flex-1">
                <button
                  onClick={handleShare}
                  className="text-center bg-primary py-3 rounded-full flex items-center justify-center border-2 text-white w-full"
                  type="button"
                >
                  Share
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Receipt;
