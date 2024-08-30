import { useRouter, useSearchParams } from "next/navigation";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import ApiService from "@/lib/service";
import { InvoicesDetails } from "@/lib/model/InvoicesDetails";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";

const Receipt = () => {
  const [transaction, setTransaction] = useState<InvoicesDetails>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const invoice = searchParams.get("invoice");
  const targetDatabase = searchParams.get("merchant");
  const containerRef = useRef(null);

  const handleDownload = () => {
    const element = containerRef.current;
    html2canvas(element!, {
      scale: 2, // Meningkatkan resolusi tangkapan layar
      useCORS: true, // Mengatasi masalah gambar yang diambil dari sumber lain
      logging: true, // Mengaktifkan log untuk debug
      allowTaint: true, // Mengizinkan canvas menampung gambar dari domain lain
    })
      .then((canvas: HTMLCanvasElement) => {
        const imgData: string = canvas.toDataURL("image/png");
        const pdf: jsPDF = new jsPDF("p", "mm");

        const imgWidth = 210; // PDF page width in mm (A4 size)
        const pageHeight = 300; // PDF page height in mm (A4 size)
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft > 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save("invoices.pdf");
      })
      .catch((error) => {
        console.error("Failed to generate PDF", error);
      });
  };

  useEffect(() => {
    setLoading(true);
    if (targetDatabase !== null && invoice !== null) {
      ApiService.checkOutPayment(invoice, targetDatabase, (data) => {
        // console.log(data.invoice);
        setTransaction(data);
        setLoading(false);
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
                    Rp. {transaction?.amount}
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
                <div className="self-stretch mb-10 px-10 h-[83.32px] flex-col justify-start items-start gap-[23.32px] flex">
                  <div className="self-stretch justify-start items-start gap-[26.65px] inline-flex">
                    <div className="grow shrink basis-0 text-[#707070]  leading-[29.98px]">
                      Item
                    </div>
                    <div className="text-start text-sm text-[#121212]  leading-[29.98px]">
                      {transaction?.items.map((item, index) => (
                        <div key={index}>
                          <div>{item.name}</div>
                          <div>Price : Rp.{item.price}</div>
                          <div>Qty : {item.quantity}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* <div className="self-stretch justify-start items-start gap-[26.65px] inline-flex">
            <div className="grow shrink basis-0 text-[#707070]  leading-[29.98px]">
              Admin Fee
            </div>
            <div className="text-center text-[#121212]  leading-[29.98px]">
              IDR 193.00
            </div>
          </div> */}
                </div>
              </div>
            </div>
            <div className="pt-10 px-8 w-full">
              <button
                onClick={() => {
                  transaction?.status === "PAID" ||
                  transaction?.status === "SETTLED"
                    ? handleDownload()
                    : transaction?.status === "EXPIRED"
                    ? router.push("/scan-qr")
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Receipt;
